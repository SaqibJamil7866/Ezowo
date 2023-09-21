import { Link } from 'react-router-dom'
import { Fragment, useState, useEffect } from 'react'
// import Avatar from '@components/avatar'
import AvatarGroup from '@components/avatar-group'
import Sidebar from './Sidebar'
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { Slack, User, Settings, Database, Edit2, MoreVertical, Trash2, Archive, ChevronDown, Share, Printer, FileText, File, Grid, Copy, ArrowRight } from 'react-feather'
import { selectThemeColors, getRoleBasedPermissions, getFormattedDate } from '@utils'
// ** Reactstrap Imports
import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
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
  Tooltip,
  Badge, UncontrolledDropdown, DropdownToggle, DropdownItem, Progress
} from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

import { getAllProjects, deleteRow, getAllUsers } from "../../../../services/Apis"

// ** Table Header
// const CustomHeader = ({ store, toggleSidebar, handlePerPage, rowsPerPage, handleFilter, searchTerm }) => {
const CustomHeader = ({ permission, openAddBar, handlePerPage, rowsPerPage, handleFilter, searchTerm }) => {
  
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

            {permission && permission.project.create && <Button className='add-new-user' color='primary' onClick={openAddBar}>
              Add Project
            </Button>}
          </div>
        </Col>
      </Row>
    </div>
  )
}

const calculatePercentage = (completed, total) => {
  if (!completed || !total) return 0
  return Math.floor((completed / total) * 100)
}

const ProjectsList = () => {

  const permission = getRoleBasedPermissions()
  console.log(permission)

  const [projects, setProjects] = useState([])
  const [users, setUsers] = useState([])

  const [sort, setSort] = useState('desc')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [sortColumn, setSortColumn] = useState('id')
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  // const [currentRole, setCurrentRole] = useState({ value: '', label: 'Select Role' })
  // const [currentPlan, setCurrentPlan] = useState({ value: '', label: 'Select Plan' })
  const [currentStatus, setCurrentStatus] = useState({ value: true, label: 'Active', number: 0 })
  
  const [selectedTask, setSelectedTask] = useState({})
  
  // ** Function to toggle sidebar
  const toggleSidebar = () => {
    const updatedSidebarStatus = !sidebarOpen
    setSidebarOpen(updatedSidebarStatus)
    if (!updatedSidebarStatus) {
      setSelectedTask({})
    }
  }
  
  const openAddBar = () => {
    setSelectedTask({}) 
    toggleSidebar()
  }

  const openEditBar = (row) => {
    // console.log(row)
    setSelectedTask(row)
    setTimeout(() => {
      toggleSidebar()
    }, 500)
  }

  const statusObj = {
    // pending: 'light-warning',
    true: 'light-success',
    false: 'light-secondary'
  }

  const fetchProjects = () => {
    const params = {
      direction: sort,
      keyword: searchTerm,
      sort: sortColumn,
      page: currentPage,
      limit: rowsPerPage,
      // role: currentRole.value,
      active: currentStatus.value ? 1 : 0
    }
    // console.table(params) 
    // return

    getAllProjects(params).then((res) => {
      const result = res.response
      // console.error('ALL Projects ', result)
      if (
        result &&
        (result.code === 200 || result.code === 400) &&
        result.data
      ) {
        setProjects(result.data)
      }
    })
  }

  const fetchUsers = () => {
    getAllUsers({type: 'dropdown'}).then((res) => {
      const result = res.response
      // console.error('ALL Users ', result)
      if (
        result &&
        (result.code === 200 || result.code === 400) &&
        result.data
      ) {
        setUsers(result.data)
      }
    })
  }

  const deleteProject = (id) => {
    deleteRow('projects/delete', {id})
    .then(res => {
      console.error(' RESPONSE ', res)
      if (res.response.code === 200) {
        fetchProjects()
      } else {
        console.error(' ERROR: Delete Project')
      }
    })
    .catch(err => {
      console.log('ERROR: ', err)
    })
  }

  useEffect(() => { 
    fetchUsers()
  }, [])

  useEffect(() => { 
    fetchProjects()
  }, [currentStatus, rowsPerPage, searchTerm])

  // ** User filter options
  // const roleOptions = [
  //   { value: '', label: 'Select Role' },
  //   { value: 'admin', label: 'Admin' },
  //   { value: 'author', label: 'Author' },
  //   { value: 'editor', label: 'Editor' },
  //   { value: 'maintainer', label: 'Maintainer' },
  //   { value: 'subscriber', label: 'Subscriber' }
  // ]

  // const planOptions = [
  //   { value: '', label: 'Select Plan' },
  //   { value: 'basic', label: 'Basic' },
  //   { value: 'company', label: 'Company' },
  //   { value: 'enterprise', label: 'Enterprise' },
  //   { value: 'team', label: 'Team' }
  // ]

  const statusOptions = [
    // { value: '', label: 'All', number: 0 },
    // { value: 'pending', label: 'Pending', number: 1 },
    { value: true, label: 'Active', number: 0 },
    { value: false, label: 'Inactive', number: 1 }
  ]

  // ** Function in get data on page change
  const handlePagination = page => {
    // dispatch(
    //   getData({
    //     sort,
    //     sortColumn,
    //     q: searchTerm,
    //     perPage: rowsPerPage,
    //     page: page.selected + 1,
    //     // role: currentRole.value,
    //     status: currentStatus.value
    //   })
    // )
    setCurrentPage(page.selected + 1)
  }

  // ** Function in get data on rows per page
  const handlePerPage = e => {
    setRowsPerPage(parseInt(e.currentTarget.value))
  }

  // ** Function in get data on search query change
  const handleFilter = val => {
    setSearchTerm(val)
  }

  // ** Custom Pagination
  const CustomPagination = () => {
    const count = Number(Math.ceil(projects.length / rowsPerPage))

    return (
      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
        pageCount={count || 1}
        activeClassName='active'
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={page => handlePagination(page)}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        containerClassName={'pagination react-paginate justify-content-end my-2 pe-1'}
      />
    )
  }

  // ** Table data to render
  const dataToRender = () => {
    const filters = {
      // role: currentRole.value,
      status: currentStatus.value,
      keyword: searchTerm
    }

    const isFiltered = Object.keys(filters).some(function (k) {
      return filters[k].length > 0
    })
    
    if (projects.length > 0) {
      return projects
    } else if (projects.length === 0 && isFiltered) {
      return []
    } else {
      return projects.slice(0, rowsPerPage)
    }
  }

  const handleSort = (column, sortDirection) => {
    setSort(sortDirection)
    setSortColumn(column.sortField)
    fetchProjects()
  }

  const formatTeam = (team) => {
    const data = team.map((item) => {
      return { ...item, id: item?.first_name || 'N/A', title: item?.first_name || 'N/A', img: avatar1, imgWidth: 26, imgHeight: 26 }
    })
    return data
  }

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Projects</CardTitle>
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
            <Col md='3' xxl='2'>
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
                  // fetchProjects()
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
            paginationServer
            columns={[
              {
                name: 'Project',
                sortable: true,
                // minWidth: '300px',
                sortField: 'fullName',
                selector: row => row.title,
                cell: row => (
                  <div className='d-flex justify-content-left align-items-center'>
                    {/* {renderClient(row)} */}
                    {/* {row.title} */}
                    <div className='d-flex flex-column'>
                      <Link
                        to={`${process.env.PUBLIC_URL}/apps/project/${row.id}`}
                        className='user_name text-truncate text-body'>
                        <span className='fw-bolder' style={{color: '#7367f0'}}>{row.title}</span>
                      </Link>
                      {/* <small className='text-truncate text-muted mb-0'>Project Category Here</small> */}
                    </div>
                  </div>
                )
              },
              {
                name: 'Team',
                sortable: false,
                // minWidth: '150px',
                sortField: '',
                selector: row => row.users,
                cell: row => (
                  <div className='d-flex justify-content-left align-items-center'>
                    <AvatarGroup data={formatTeam(row.users)} />
                  </div>
                )
              },
              {
                name: 'Progress',
                selector: row => row.progress,
                sortable: true,
                cell: row => {
                  return (
                    <div className='d-flex flex-column w-100'>
                      <small className='mb-1'>{`${calculatePercentage(row?.tasks?.completed, row?.tasks?.total)}%`}</small>
                      <Progress
                        value={calculatePercentage(row?.tasks?.completed, row?.tasks?.total)}
                        style={{ height: '6px' }}
                        className={`w-100 progress-bar-${row.progressColor}`}
                      />
                    </div>
                  )
                }
              },
              // {
              //   name: 'Role',
              //   sortable: true,
              //   minWidth: '172px',
              //   sortField: 'role',
              //   selector: row => row.role,
              //   cell: row => renderRole(row)
              // },
              // {
              //   name: 'Plan',
              //   minWidth: '138px',
              //   sortable: true,
              //   sortField: 'currentPlan',
              //   selector: row => row.currentPlan,
              //   cell: row => <span className='text-capitalize'>{row.currentPlan}</span>
              // },
              {
                name: 'Date',
                minWidth: '220px',
                sortable: false,
                sortField: '',
                selector: row => row.start_date,
                cell: row => <span className='text-capitalize'>{getFormattedDate(row.start_date)} <ArrowRight size={14} className='me-20' /> {getFormattedDate(row.end_date)}</span>
              },
              {
                name: 'Manager',
                sortable: true,
                // minWidth: '138px',
                // sortField: 'fullName',
                selector: row => row?.manager?.first_name,
                cell: row => (
                  <div className='d-flex justify-content-left align-items-center'>
                    {/* {renderClient(row)} */}
                    <div className='d-flex flex-column'>
                      <span title={row?.manager?.email} className='fw-bolder'>{`${row?.manager?.first_name  } ${  row?.manager?.last_name}`}</span>
                    </div>
                  </div>
                )
              },
              {
                name: 'Status',
                minWidth: '138px',
                sortable: true,
                sortField: 'status',
                selector: row => row.status,
                cell: row => (
                  <Badge className='text-capitalize' color={statusObj[row.active]} pill>
                    {row.status}
                  </Badge>
                )
              },
              {
                name: 'Actions',
                minWidth: '100px',
                cell: row => (
                  permission.project.edit || permission.project.delete ? <div className='column-action'>
                    <UncontrolledDropdown>
                      <DropdownToggle tag='div' className='btn btn-sm'>
                        <MoreVertical size={14} className='cursor-pointer' />
                      </DropdownToggle>
                      <DropdownMenu>
                        {permission.project.edit ? <DropdownItem className='w-100' onClick={e => {
                          e.preventDefault() 
                          openEditBar(row)
                          }}>
                          <Archive size={14} className='me-50' />
                          <span className='align-middle'>Edit</span>
                        </DropdownItem> : null}
                        {permission.project.delete ? <DropdownItem
                          tag='a'
                          href='/'
                          className='w-100'
                          onClick={e => {
                            e.preventDefault()
                            deleteProject(row.id)
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
            onSort={handleSort}
            sortIcon={<ChevronDown />}
            className='react-dataTable'
            paginationComponent={CustomPagination}
            data={dataToRender()}
            subHeaderComponent={
              <CustomHeader
                permission={permission}
                searchTerm={searchTerm}
                rowsPerPage={rowsPerPage}
                handleFilter={handleFilter}
                handlePerPage={handlePerPage}
                openAddBar={openAddBar}
              />
            }
          />
        </div>
      </Card>

      <Sidebar fetchProjects={fetchProjects} open={sidebarOpen} toggleSidebar={toggleSidebar} taskItem={selectedTask} users={users} />
    </Fragment>
  )
}

export default ProjectsList

// ** Converts table to CSV
// function convertArrayOfObjectsToCSV(array) {
//   let result

//   const columnDelimiter = ','
//   const lineDelimiter = '\n'
//   const keys = Object.keys(store.data[0])

//   result = ''
//   result += keys.join(columnDelimiter)
//   result += lineDelimiter

//   array.forEach(item => {
//     let ctr = 0
//     keys.forEach(key => {
//       if (ctr > 0) result += columnDelimiter

//       result += item[key]

//       ctr++
//     })
//     result += lineDelimiter
//   })

//   return result
// }
// // ** Downloads CSV
// function downloadCSV(array) {
//   const link = document.createElement('a')
//   let csv = convertArrayOfObjectsToCSV(array)
//   if (csv === null) return

//   const filename = 'export.csv'

//   if (!csv.match(/^data:text\/csv/i)) {
//     csv = `data:text/csv;charset=utf-8,${csv}`
//   }

//   link.setAttribute('href', encodeURI(csv))
//   link.setAttribute('download', filename)
//   link.click()
// }