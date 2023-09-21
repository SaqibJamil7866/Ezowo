import { Link } from 'react-router-dom'
import Avatar from '@components/avatar'
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive, ChevronDown, Share, Printer, File, Grid, Copy } from 'react-feather'
import { Fragment, useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'

// ** Utils
import { selectThemeColors, getRoleBasedPermissions } from '@utils'

// ** Reactstrap Imports
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
  Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

import { getAllUsers, deleteRow, getAllRoles } from "../../../../services/Apis"

// ** Table Header
// const CustomHeader = ({ store, toggleSidebar, handlePerPage, rowsPerPage, handleFilter, searchTerm }) => {
const CustomHeader = ({ permission, openAddBar, handlePerPage, rowsPerPage, handleFilter, searchTerm }) => {
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

  // ** Downloads CSV
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
              className='ms-50 w-00'
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

            {permission && permission.user.create ? <Button className='add-new-user' color='primary' onClick={openAddBar}>
              Add People
            </Button> : null}
          </div>
        </Col>
      </Row>
    </div>
  )
}

const UsersList = () => {
  const permission = getRoleBasedPermissions()
  const [users, setUsers] = useState([])
  const [usersOptions, setUsersOptions] = useState([])
  const [sort, setSort] = useState('desc')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [sortColumn, setSortColumn] = useState('id')
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentStatus, setCurrentStatus] = useState({ value: true, label: 'Active', number: 0 })
  const [currentRole, setCurrentRole] = useState({ value: '', title: 'All', label: 'All' })
  const [roleOptions, setRoleOptions] = useState([])

  const [selectedUser, setSelectedUser] = useState({})

  // const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  const toggleSidebar = () => {
    const updatedSidebarStatus = !sidebarOpen
    setSidebarOpen(updatedSidebarStatus)
    if (!updatedSidebarStatus) {
      setSelectedUser({})
    }
  }

  const openAddBar = () => {
    setSelectedUser({}) 
    toggleSidebar()
  }

  const openEditBar = (row) => {
    setSelectedUser(row)
    setTimeout(() => {
      toggleSidebar()
    }, 500)
  }

  const statusObj = {
    // pending: 'light-warning',
    active: 'light-success',
    inactive: 'light-secondary'
  }

  // const renderRole = row => {
  //   const roleObj = {
  //     subscriber: {
  //       class: 'text-primary',
  //       icon: User
  //     },
  //     maintainer: {
  //       class: 'text-success',
  //       icon: Database
  //     },
  //     editor: {
  //       class: 'text-info',
  //       icon: Edit2
  //     },
  //     author: {
  //       class: 'text-warning',
  //       icon: Settings
  //     },
  //     admin: {
  //       class: 'text-danger',
  //       icon: Slack
  //     }
  //   }

  //   const Icon = roleObj[row.role] ? roleObj[row.role].icon : Edit2

  //   return (
  //     <span className='text-truncate text-capitalize align-middle'>
  //       {/* <Icon size={18} className={`${roleObj[row.role] ? roleObj[row.role].class : ''} me-50`} /> */}
  //       {row.role}
  //     </span>
  //   )
  // }

  const renderClient = row => {
    if (row?.avatar?.length) {
      return <Avatar className='me-1' img={row.avatar} width='32' height='32' />
    } else {
      return (
        <Avatar
          initials
          className='me-1'
          color={row.avatarColor || 'light-primary'}
          content={`${row.first_name  } ${  row.last_name}` || ''}
        />
      )
    }
  }

  const renderDesignation = row => {
    const designationObj = {
      subscriber: {
        class: 'text-primary',
        icon: User
      },
      maintainer: {
        class: 'text-success',
        icon: Database
      },
      editor: {
        class: 'text-info',
        icon: Edit2
      },
      author: {
        class: 'text-warning',
        icon: Settings
      },
      admin: {
        class: 'text-danger',
        icon: Slack
      }
    }
  
    const Icon = designationObj[row.role] ? designationObj[row.role].icon : Edit2
  
    return (
      <span className='text-truncate text-capitalize align-middle'>
        {/* <Icon size={18} className={`${designationObj[row.role] ? designationObj[row.role].class : ''} me-50`} /> */}
        {row.role}
      </span>
    )
  }

  const fetchUsers = () => {
    const params = {
      direction: sort,
      keyword: searchTerm,
      sort: sortColumn,
      page: currentPage,
      perPage: rowsPerPage,
      active: currentStatus.value ? 1 : 0
    }
    if (currentRole && currentRole?.value && currentRole?.id) {
      params['role'] = currentRole?.id
    }

    getAllUsers(params).then((res) => {
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

  const deleteUser = (id) => {
    deleteRow('users/delete', {id})
    .then(res => {
      // console.error(' RESPONSE ', res)
      if (res.response.code === 200) {
        fetchUsers()
      } else {
        console.error(' ERROR: Delete User')
      }
    })
    .catch(err => {
      console.log('ERROR: ', err)
    })
  }

  const fetchRoles = () => {
    getAllRoles().then((res) => {
      const result = res.response
      // console.error('ALL Roles ', result)
      if (
        result &&
        (result.code === 200 || result.code === 400) &&
        result.data
      ) {
        // console.error('ALL ROLES ', result.data)
        result.data.push({
          value: '',
          title: 'All',
          label: 'All'
        })
        const data = result.data.map((item) => {
          return { ...item, value: item.id, label: item.title }
        })
        setRoleOptions(data)
      }
    })
  }

  const getUsersOptions = () => {
    getAllUsers({type: 'dropdown'}).then((res) => {
      const result = res.response
      if (
        result &&
        (result.code === 200 || result.code === 400) &&
        result.data
        ) {
        // console.error('ALL OPTIONS ', result)
        const data = result.data.map((item) => {
          return { ...item, value: item.id, label: `${item.first_name  } ${  item.last_name}` }
        })
        setUsersOptions(data)
      } else {
        return []
      }
    })
  }

  useEffect(() => { 
    fetchUsers()
  }, [currentStatus, rowsPerPage, searchTerm, currentRole])

  useEffect(() => { 
    fetchRoles()
    getUsersOptions()
  }, [])
  
  const statusOptions = [
    { value: true, label: 'Active', number: 0 },
    { value: false, label: 'Inactive', number: 1 }
  ]

  // ** Function in get data on page change
  const handlePagination = page => {
    setCurrentPage(page.selected + 1)
  }

  // ** Function in get data on rows per page
  const handlePerPage = e => {
    const value = parseInt(e.currentTarget.value)
    setRowsPerPage(value)
  }

  // ** Function in get data on search query change
  const handleFilter = val => {
    setSearchTerm(val)
  }

  // ** Custom Pagination
  const CustomPagination = () => {
    const count = Number(Math.ceil(users.total / rowsPerPage))

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
      status: currentStatus.value,
      keyword: searchTerm
    }

    if (currentRole?.value) {
      filters['role'] = currentRole.value
    }

    const isFiltered = Object.keys(filters).some(function (k) {
      return filters[k].length > 0
    })

    // console.error('All Users: ', users)
    if (users.length > 0) {
      return users
    } else if (users.length === 0 && isFiltered) {
      return []
    } else {
      return users.slice(0, rowsPerPage)
    }
  }

  const handleSort = (column, sortDirection) => {
    setSort(sortDirection)
    setSortColumn(column.sortField)
  }

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Filters</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='2' xxl='2'>
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
                }}
              />
            </Col>
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
                name: 'People',
                sortable: true,
                minWidth: '338px',
                sortField: 'fullName',
                selector: row => `${row.first_name  } ${  row.last_name}`,
                cell: row => (
                  <div className='d-flex justify-content-left align-items-center'>
                    {renderClient(row)}
                    <div className='d-flex flex-column'>
                      {/* <Link
                        to={`/apps/user/view/${row.id}`}
                        className='user_name text-truncate text-body'
                        onClick={() => store.dispatch(getUser(row.id))}
                      > */}
                        <span className='fw-bolder'>{`${row.first_name  } ${   row.last_name}`}</span>
                      {/* </Link> */}
                      <small className='text-truncate text-muted mb-0'>{row.email}</small>
                    </div>
                  </div>
                )
              },
              {
                name: 'Role',
                minWidth: '230px',
                sortable: false,
                // sortField: 'role',
                selector: row => row?.role?.title,
                cell: row => <span className='text-capitalize'>{row?.role?.title}</span>
              },
              {
                name: 'Designation',
                minWidth: '230px',
                sortable: true,
                sortField: 'designation',
                selector: row => row.designation,
                cell: row => <span className='text-capitalize'>{row.designation}</span>
              },
              // {
              //   name: 'Department',
              //   sortable: true,
              //   minWidth: '172px',
              //   sortField: 'role',
              //   selector: row => row.role,
              //   cell: row => renderDesignation(row)
              // },
              {
                name: 'Reporting To',
                minWidth: '230px',
                sortable: true,
                sortField: 'reporting_to',
                selector: row => row.reporting_to,
                cell: row => <span className='text-capitalize'>{row.reporting_to ? `${row?.reporting_user?.first_name  } ${  row?.reporting_user?.last_name}` : '' }</span>
              },
              // {
              //   name: 'Plan',
              //   minWidth: '138px',
              //   sortable: true,
              //   sortField: 'currentPlan',
              //   selector: row => row.currentPlan,
              //   cell: row => <span className='text-capitalize'>{row.currentPlan}</span>
              // },
              {
                name: 'Status',
                minWidth: '138px',
                sortable: true,
                sortField: 'active',
                selector: row => row.active,
                cell: row => (
                  <Badge className='text-capitalize' color={statusObj[row.active ? 'active' : 'inactive']} pill>
                    {row.active ? 'Active' : 'Inactive'}
                  </Badge>
                )
              },
              {
                name: 'Actions',
                minWidth: '100px',
                cell: row => (
                  permission.user.edit || permission.user.delete ? <div className='column-action'>
                    <UncontrolledDropdown>
                      <DropdownToggle tag='div' className='btn btn-sm'>
                        <MoreVertical size={14} className='cursor-pointer' />
                      </DropdownToggle>
                      <DropdownMenu>
                        {permission.user.edit ? <DropdownItem tag='a' href='/' className='w-100' onClick={e => {
                          e.preventDefault() 
                          openEditBar(row)
                          }}>
                          <Archive size={14} className='me-50' />
                          <span className='align-middle'>Edit</span>
                        </DropdownItem> : null}
                        {permission.user.delete ? <DropdownItem
                          tag='a'
                          href='/'
                          className='w-100'
                          onClick={e => {
                            e.preventDefault()
                            deleteUser(row.id)
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

      <Sidebar open={sidebarOpen} fetchUsers={fetchUsers} toggleSidebar={toggleSidebar} userItem={selectedUser} userOptions={usersOptions} roles={roleOptions} />
    </Fragment>
  )
}

export default UsersList