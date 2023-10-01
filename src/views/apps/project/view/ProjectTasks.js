import { Fragment, useState, useEffect } from 'react'
import { taskStatusMeta, taskPriorityMeta, selectThemeColors, getRoleBasedPermissions, getFormattedDate } from '@utils'
import { Link, useParams } from 'react-router-dom'
import Select from 'react-select'
import { MoreVertical, Trash2, Archive, ChevronDown, ArrowRight } from 'react-feather'
import {
  Row,
  Col,
  Card,
  Input,
  Label,
  Button,
  CardBody,
  CardTitle,
  CardHeader,
  DropdownMenu,
  Badge, UncontrolledDropdown, DropdownToggle, DropdownItem, Progress
} from 'reactstrap'
import DataTable from 'react-data-table-component'
import Avatar from '@components/avatar'
import '@styles/react/libs/tables/react-dataTable-component.scss'

import TaskSidebar from './TaskSidebar'
import { getAllProjectTasks, getAllTaskTypes, getAllTaskPriorities, getAllTaskStatus, getAllUsers, deleteRow } from "../../../../services/Apis"

const statusOptions = [
  { value: true, label: 'Active', number: 0 },
  { value: false, label: 'Inactive', number: 1 }
]
const taskStatusOptions = [
  { id: '', value: '', label: 'All', number: 0 },
  // { value: 'todo', label: 'TODO', number: 1 },
  // { value: 'in_development', label: 'In Development', number: 2 },
  // { value: 'branch_testing', label: 'Branch Testing', number: 3 },
  // { value: 'staging_deployed', label: 'Staging Deployed', number: 4 },
  // { value: 'production_deployed', label: 'Production Deployed', number: 5 }
  {
    id: 4,
    label: "To Do",
    value: "todo"
    },
    {
    id: 5,
    label: "In Development",
    value: "in_development"
    },
    {
    id: 6,
    label: "Branch Testing",
    value: "branch_testing"
    },
    {
    id: 7,
    label: "Staging Deployed",
    value: "staging_deployed"
    },
    {
    id: 8,
    label: "Production Deployed",
    value: "production_deployed"
    },
    {
    id: 9,
    label: "Done",
    value: "done"
    }
]

const priorityOptions = [
  { value: '', label: 'All', number: 0 },
  { value: 'low', label: 'Low', number: 1 },
  { value: 'medium', label: 'Medium', number: 2 },
  { value: 'high', label: 'High', number: 3 }
]

const CustomHeader = ({ permission, toggleSidebar, handlePerPage, rowsPerPage, handleFilter, searchTerm }) => {
  
  return (
    <div className='invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75'>
      <Row>
        <Col xl='6' className='d-flex align-items-center p-0'>
          <div className='d-flex align-items-center w-100'>
            <label htmlFor='rows-per-page'>Show</label>
            <Input
              className='mx-50'
              type='select'
              id='rows-per-page'
              value={rowsPerPage}
              onChange={handlePerPage}
              style={{ width: '5rem' }}
            >
              <option value='10'>10</option>
              <option value='25'>25</option>
              <option value='50'>50</option>
            </Input>
            <label htmlFor='rows-per-page'>Entries</label>
          </div>
        </Col>
        <Col
          xl='6'
          className='d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1'
        >
          <div className='d-flex align-items-center mb-sm-0 mb-1 me-1'>
            <label className='mb-0' htmlFor='search-invoice'>
              Search:
            </label>
            <Input
              id='search-invoice'
              className='ms-50 w-100'
              type='text'
              value={searchTerm}
              onChange={e => handleFilter(e.target.value)}
            />
          </div>

          <div className='d-flex align-items-center table-header-actions'>
            {/* <UncontrolledDropdown className='me-1'>
              <DropdownToggle color='secondary' caret outline>
                <Share className='font-small-4 me-50' />
                <span className='align-middle'>Export</span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem className='w-100'>
                  <Printer className='font-small-4 me-50' />
                  <span className='align-middle'>Print</span>
                </DropdownItem>
                <DropdownItem className='w-100' onClick={() => downloadCSV(store.data)}>
                  <FileText className='font-small-4 me-50' />
                  <span className='align-middle'>CSV</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <Grid className='font-small-4 me-50' />
                  <span className='align-middle'>Excel</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <File className='font-small-4 me-50' />
                  <span className='align-middle'>PDF</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <Copy className='font-small-4 me-50' />
                  <span className='align-middle'>Copy</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}

            {permission && permission.task.create ? <Button className='add-new-user' color='primary' onClick={toggleSidebar}>
              Add Task
            </Button> : null}
          </div>
        </Col>
      </Row>
    </div>
  )
}

const ProjectTasks = ({project}) => {
  const permission = getRoleBasedPermissions()
  // const projectId = useParams().id
  const projectId = project?.id;
  
  const [sort, setSort] = useState('desc')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [sortColumn, setSortColumn] = useState('id')
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  const [currentStatus, setCurrentStatus] = useState({ value: true, label: 'Active', number: 0 })
  const [filterTaskStatus, setFilterTaskStatus] = useState({ id:'', value: '', label: 'All', number: 0 })
  const [currentPriority, setCurrentPriority] = useState({ value: '', label: 'All', number: 0 })

  const [tasks, setTasks] = useState([])
  const [taskStatus, setTaskStatus] = useState([])
  const [taskTypes, setTaskTypes] = useState([])
  const [taskPriorities, setTaskPriorities] = useState([])
  const [allUsers, setAllUsers] = useState([])

  const [selectedTask, setSelectedTask] = useState({})

  const toggleSidebar = () => {
    const updatedSidebarStatus = !sidebarOpen
    setSidebarOpen(updatedSidebarStatus)
    if (!updatedSidebarStatus) {
      setSelectedTask({})
    }
  }

  const openEditBar = (row) => {
    setSelectedTask(row)
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
      // role: currentRole.value,
      priority: currentPriority.value,
      active: currentStatus.value ? 1 : 0,
      status_id: filterTaskStatus?.id || '', 
      project_id: projectId
    }
    // console.table(params) 
    // return

    getAllProjectTasks(params).then((res) => {
      const result = res.response
      if (
        result &&
        (result.code === 200 || result.code === 400) &&
        result.data
      ) {
        setTasks(result.data)
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

  const fetchUsers = () => {
    getAllUsers({type: 'dropdown'}).then((res) => {
      const result = res.response
      if (
        result &&
        (result.code === 200 || result.code === 400) &&
        result.data
      ) {
        setAllUsers(result.data)
      }
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
    // dispatch(
    //   getData({
    //     sort,
    //     sortColumn,
    //     q: searchTerm,
    //     perPage: value,
    //     page: currentPage,
    //     // role: currentRole.value,
    //     status: currentStatus.value
    //   })
    // )
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
    fetchUsers()
  }, [])

  const getInitials = (str) => {
    const results = []
    if (str && str?.length) {
      const wordArray = str.split(' ')
      wordArray.forEach(e => {
        results.push(e[0])
      })
      return results.join('').toUpperCase()
    } else {
      return str
    }
    
  }
  

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Tasks</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            {/* <Col md='4'>
              <Label for='role-select'>Role</Label>
              <Select
                isClearable={false}
                value={currentRole}
                options={roleOptions}
                className='react-select'
                classNamePrefix='select'
                theme={selectThemeColors}
                onChange={data => {
                  setCurrentRole(data)
                  dispatch(
                    getData({
                      sort,
                      sortColumn,
                      q: searchTerm,
                      role: data.value,
                      page: currentPage,
                      perPage: rowsPerPage,
                      status: currentStatus.value
                    })
                  )
                }}
              />
            </Col> */}
            {/* <Col className='my-md-0 my-1' md='4'>
              <Label for='plan-select'>Plan</Label>
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={planOptions}
                value={currentPlan}
                onChange={data => {
                  setCurrentPlan(data)
                  dispatch(
                    getData({
                      sort,
                      sortColumn,
                      q: searchTerm,
                      page: currentPage,
                      perPage: rowsPerPage,
                      role: currentRole.value,
                      currentPlan: data.value,
                      status: currentStatus.value
                    })
                  )
                }}
              />
            </Col> */}
            <Col md='2' xxl='2'>
              <Label for='status-select'>Status</Label>
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={statusOptions}
                value={currentStatus}
                onChange={data => {
                  setCurrentStatus(data)
                }}
              />
            </Col>
            
            <Col md='2' xxl='2'>
              <Label for='status-select'>Task Status</Label>
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={taskStatusOptions}
                value={filterTaskStatus}
                onChange={data => {
                  setFilterTaskStatus(data)
                }}
              />
            </Col>
            <Col md='2' xxl='2'>
              <Label for='status-select'>Priority</Label>
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={priorityOptions}
                value={currentPriority}
                onChange={data => {
                  setCurrentPriority(data)
                }}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>

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
              minWidth: '300px',
              name: 'Task',
              selector: row => row.title,
              cell: row => {
                return (
                  <div className='d-flex justify-content-left align-items-center'>
                    {/* <div className='avatar-wrapper'>
                      <Avatar className='me-1' img={require('@src/assets/images/icons/brands/react-label.png').default} alt={row.title} imgWidth='32' />
                    </div> */}
                    <div className='d-flex flex-column'>
                    <Link
                        to={`${process.env.PUBLIC_URL}/apps/project/${projectId}/task/${row.id}`}
                        className='user_name text-truncate text-body'
                        // onClick={() => store.dispatch(getUser(row.id))}
                      >
                        <span className='text-truncate fw-bolder' style={{color: '#7367f0'}}>{`${getInitials(project?.title)  }-${  row.id}`} {row.title}</span>
                      </Link>
                      {/* <small className='text-muted'>{row.description}</small> */}
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
            {
              name: 'Date',
              minWidth: '205px',
              selector: row => row.start_date,
              cell: row => <span className='text-capitalize'>{getFormattedDate(row.start_date)} <ArrowRight size={14} className='me-20' /> {getFormattedDate(row.end_date)}</span>
            },
            // {
            //   name: 'Progress',
            //   selector: row => row.progress,
            //   sortable: true,
            //   cell: row => {
            //     return (
            //       <div className='d-flex flex-column w-100'>
            //         <small className='mb-1'>{`${row.progress}%`}</small>
            //         <Progress
            //           value={row.progress}
            //           style={{ height: '6px' }}
            //           className={`w-100 progress-bar-${row.progressColor}`}
            //         />
            //       </div>
            //     )
            //   }
            // },
            {
              name: 'Status',
              minWidth: '138px',
              sortable: true,
              sortField: 'status.title',
              selector: row => row.status.title,
              cell: row => (
                <Badge className='text-capitalize' color={taskStatusMeta[row.status?.value]} pill>
                  {row.status?.title}
                </Badge>
              )
            },
            {
              name: 'Priority',
              minWidth: '138px',
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
                  <UncontrolledDropdown>
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
          data={tasks}
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

      <TaskSidebar taskItem={selectedTask} fetchProjectTasks={fetchProjectTasks} open={sidebarOpen} toggleSidebar={toggleSidebar} types={taskTypes} priorities={taskPriorities} taskStatusData={taskStatus} users={allUsers} projectId={projectId} />
    </Fragment>
  )
}

export default ProjectTasks
