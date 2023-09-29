import { Fragment, useState, useEffect } from 'react'
import { taskStatusMeta, taskPriorityMeta, getRoleBasedPermissions } from '@utils'
import { Link, useParams } from 'react-router-dom'
import { MoreVertical, Trash2, Archive, ChevronDown } from 'react-feather'
import {
  Row,
  Col,
  Card,
  Button,
  DropdownMenu,
  Badge, UncontrolledDropdown, DropdownToggle, DropdownItem, Progress
} from 'reactstrap'
import DataTable from 'react-data-table-component'
import '@styles/react/libs/tables/react-dataTable-component.scss'

import TaskSidebar from './TaskSidebar'
import { getAllProjectTasks, getAllTaskTypes, getAllTaskPriorities, getAllTaskStatus, deleteRow } from "../../../../services/Apis"


const CustomHeader = ({ permission, toggleSidebar }) => {
  
  return (
    <div className='invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75'>
      <Row>
        <Col
          xl='12'
          className='d-flex align-items-sm-center justify-content-xl-between justify-content-between flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1'
        >
            <div className='d-flex align-items-center me-1'>
                <h4>Sub Tasks</h4>
            </div>
            <div className='d-flex align-items-center table-header-actions'>
                {permission && permission.task.create ? <Button className='add-new-user' color='primary' onClick={toggleSidebar}>
                Add Sub Task
                </Button> : null}
            </div>
        </Col>
      </Row>
    </div>
  )
}

const ProjectSubTasks = ({parentTask}) => {
  const permission = getRoleBasedPermissions()
  const projectId = useParams().id
  
  const [sort, setSort] = useState('desc')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [sortColumn, setSortColumn] = useState('id')
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  const [currentStatus, setCurrentStatus] = useState({ value: true, label: 'Active', number: 0 })
  const [filterTaskStatus, setFilterTaskStatus] = useState({ id:'', value: '', label: 'All', number: 0 })
  const [currentPriority, setCurrentPriority] = useState({ value: '', label: 'All', number: 0 })

  const [subTasks, setSubTasks] = useState([])
  const [taskStatus, setTaskStatus] = useState([])
  const [taskTypes, setTaskTypes] = useState([])
  const [taskPriorities, setTaskPriorities] = useState([])

  const [selectedSubTask, setSubSelectedTask] = useState({})

  const toggleSidebar = () => {
    const updatedSidebarStatus = !sidebarOpen
    setSidebarOpen(updatedSidebarStatus)
    if (!updatedSidebarStatus) {
      setSubSelectedTask({parentTask})
    }
  }

  const openEditBar = (row) => {
    setSubSelectedTask({...row, parentTask })
    setTimeout(() => {
      toggleSidebar()
    }, 500)
  }
  
  const fetchProjectTasks = () => {
    const params = {
      direction: sort,
      keyword: searchTerm,
      sort: sortColumn,
      page: currentPage,
      limit: rowsPerPage,
      priority: currentPriority.value,
      active: currentStatus.value ? 1 : 0,
      status_id: filterTaskStatus?.id || '', 
      project_id: projectId,
      parent_task_id: parentTask?.id
    }

    getAllProjectTasks(params).then((res) => {
      const result = res.response
      if (
        result &&
        (result.code === 200 || result.code === 400) &&
        result.data
      ) {
        setSubTasks(result.data)
      }
    })
  }

  const deleteTask = (id) => {
    deleteRow('tasks/delete', {id})
    .then(res => {
      console.error(' RESPONSE ', res)
      if (res.response.code === 200) {
        fetchProjectTasks()
      } else {
        console.error(' ERROR: Delete Task')
      }
    })
    .catch(err => {
      console.log('ERROR: ', err)
    })
  }

  const getTaskStatus = () => {
    getAllTaskStatus().then((res) => {
      const result = res.response
      if (
        result &&
        (result.code === 200 || result.code === 400) &&
        result.data
      ) {
        setTaskStatus(result.data)
      }
    })
  }

  const getTaskPriorities = () => {
    getAllTaskPriorities().then((res) => {
      const result = res.response
      if (
        result &&
        (result.code === 200 || result.code === 400) &&
        result.data
      ) {
        setTaskPriorities(result.data)
      }
    })
  }

  const getTaskTypes = () => {
    getAllTaskTypes().then((res) => {
      const result = res.response
      if (
        result &&
        (result.code === 200 || result.code === 400) &&
        result.data
      ) {
        setTaskTypes(result.data)
      }
    })
  }

  const handlePerPage = e => {
    const value = parseInt(e.currentTarget.value)
    setRowsPerPage(value)
  }

  // ** Function in get data on search query change
  const handleFilter = val => {
    setSearchTerm(val)
    fetchProjectTasks()
  }

  useEffect(() => { 
    fetchProjectTasks()
  }, [currentStatus, rowsPerPage, searchTerm, filterTaskStatus, currentPriority])

  useEffect(() => { 
    getTaskTypes()
    getTaskPriorities()
    getTaskStatus()
  }, [])
  
  return (
    <Fragment>
      <Card className='overflow-hidden'>
        <div className='react-dataTable'>
        <DataTable
          noHeader
          subHeader
          sortServer
          pagination
          responsive
          columns={[
            {
              sortable: true,
              minWidth: '200px',
              name: 'Task',
              selector: row => row.title,
              cell: row => {
                return (
                  <div className='d-flex justify-content-left align-items-center'>
                    <div className='d-flex flex-column user_name text-truncate text-body'>
                        <span className='text-truncate fw-bolder' style={{color: '#7367f0'}}>{row.title}</span>
                    </div>
                  </div>
                )
              }
            },
            {
              name: 'Assignee',
              selector: row => (row?.assigned_to ? `${row?.assigned_to?.first_name  } ${row?.assigned_to?.last_name}` : 'N/A')
            },
            {
              name: 'Reporter',
              selector: row => (row?.reported_by_task ? `${row?.reported_by_task?.first_name  } ${  row?.reported_by_task?.last_name}` : 'N/A')
            },
            // {
            //   name: 'Status',
            //   minWidth: '120px',
            //   sortable: true,
            //   sortField: 'status.title',
            //   selector: row => row.status.title,
            //   cell: row => (
            //     <Badge className='text-capitalize' color={taskStatusMeta[row.status?.value]} pill>
            //       {row.status?.title}
            //     </Badge>
            //   )
            // },
            {
              name: 'Priority',
              minWidth: '120px',
              sortable: true,
              sortField: 'priority.title',
              selector: row => row.priority.title,
              cell: row => (
                <Badge className='text-capitalize' color={taskPriorityMeta[row.priority?.value]} pill>
                  {row.priority?.title}
                </Badge>
              )
            },
            {
              name: 'Actions',
              minWidth: '100px',
              cell: row => (
                permission.task.edit || permission.task.delete ? <div className='column-action'>
                  <UncontrolledDropdown direction="start">
                    <DropdownToggle tag='div' className='btn btn-sm'>
                      <MoreVertical size={14} className='cursor-pointer' />
                    </DropdownToggle>
                    <DropdownMenu>
                    {permission.task.edit ? <DropdownItem tag='a' href='/' className='w-100' onClick={e => {
                          e.preventDefault() 
                          openEditBar(row)
                          }}>
                        <Archive size={14} className='me-50' />
                        <span className='align-middle'>Edit</span>
                      </DropdownItem> : null}
                      {permission.task.delete ? <DropdownItem
                        tag='a'
                        href='/'
                        className='w-100'
                        onClick={e => {
                          e.preventDefault()
                          deleteTask(row.id)
                        }}
                      >
                        <Trash2 size={14} className='me-50' />
                        <span className='align-middle'>Delete</span>
                      </DropdownItem> : null}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div> : null
              )
            }
          ]}
          data={subTasks}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          subHeaderComponent={
            <CustomHeader
              permission={permission}
              searchTerm={searchTerm}
              rowsPerPage={rowsPerPage}
              handleFilter={handleFilter}
              handlePerPage={handlePerPage}
              toggleSidebar={toggleSidebar}
            />
          }
        />
        </div>
      </Card>

      <TaskSidebar fromWhere="sub_task" taskItem={selectedSubTask} fetchProjectTasks={fetchProjectTasks} open={sidebarOpen} toggleSidebar={toggleSidebar} types={taskTypes} priorities={taskPriorities} taskStatusData={taskStatus} users={[]} projectId={projectId} />
    </Fragment>
  )
}

export default ProjectSubTasks
