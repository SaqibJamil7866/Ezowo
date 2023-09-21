// ** React Imports
import { useEffect, useState } from 'react'
import { getProjectTasksCountByStatus } from "../../../services/Apis"

// ** Reactstrap Imports
import {
  Nav,
  TabPane,
  NavItem,
  NavLink,
  TabContent,
  Dropdown,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'
import DashboardTasksData from './DashboardTasksData'

const DashboardTasks = props => {
  
  const [active, setActive] = useState('1')
  const [data, setData] = useState([])
  const toggle = tab => {
    setActive(tab)
  }

  // const fetchProjectTasksCountByStatus = () => {
  //   const params = {
  //     user_id: JSON.parse(localStorage.getItem('userData')).id
  //   }
  //   getProjectTasksCountByStatus(params).then((res) => {
  //     const result = res.response
  //     if (
  //       result &&
  //       (result.code === 200 || result.code === 400) &&
  //       result.data
  //     ) {
  //       setData({
  //         totalTicket: result.data[0].count + result.data[1].count + result.data[2].count + result.data[3].count + result.data[4].count,
  //         todo: result.data[0].count,
  //         inprogress: result.data[1].count + result.data[2].count + result.data[3].count + result.data[4].count,
  //         completed: result.data[5].count
  //       })
  //     }
  //   })
  // }

  // useEffect(() => {
  //   fetchProjectTasksCountByStatus()    
  // }, [])
  
  return data !== null ? (
    <Card>
      <CardHeader className='pb-1'>
        <CardTitle tag='h4'>Tasks Due</CardTitle>
      </CardHeader>
      <CardBody>
        <>
        <Nav pills>
          <NavItem>
            <NavLink active={active === '1'} onClick={() => { toggle('1') }} >This Week</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={active === '2'} onClick={() => { toggle('2') }} >Next Week</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={active === '3'} onClick={() => { toggle('3') }} >Overdue</NavLink>
          </NavItem>
        </Nav>
        <TabContent className='py-50' activeTab={active}>
          <TabPane tabId='1'>
            <DashboardTasksData due_date={'this_week'} />
          </TabPane>
          <TabPane tabId='2'>
            <DashboardTasksData due_date={'next_week'} />
          </TabPane>
          <TabPane tabId='3'>
            <DashboardTasksData due_date={'overdue'} />
          </TabPane>
        </TabContent>
        </>
      </CardBody>
    </Card>
  ) : null
}
export default DashboardTasks
