import { useEffect, useState, Fragment } from 'react'
import { useParams } from 'react-router-dom'
// import Breadcrumbs from '@components/breadcrumbs'
import ProjectActivities from '@src/views/apps/project/view/Activities'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import { User, Lock, Bookmark, Bell, Link } from 'react-feather'

// import InvoiceList from './InvoiceList'
// import SecurityTab from './SecurityTab'
// import Connections from './Connections'
// import BillingPlanTab from './BillingTab'
// import Notifications from './Notifications'
// import UserProjectsList from './UserProjectsList'
import Summary from './Summary'
import ProjectTasks from './ProjectTasks'
import Todo from '../../todo/index'

import { getProjectSummary } from "../../../../services/Apis"

const UserTabs = ({ active, toggleTab }) => {

  const [summaryData, setSummaryData] = useState({})
  const [teamData, setTeamData] = useState([])
  const projectId = useParams()?.id

  const fetchProjectSummary = () => {
    const params = {
      id: projectId
    }
    getProjectSummary(params).then((res) => {
      const result = res.response
      if (
        result &&
        (result.code === 200 || result.code === 400) &&
        result.data
      ) {
        setSummaryData(result.data)
        setTeamData(result?.data?.users.map((item) => {
          return { ...item, content: `${item.first_name  } ${  item.last_name}`, initials: !!item.first_name }
        }))
      }
    })
  }

  useEffect(() => {
    fetchProjectSummary()
  }, [])
  
  return (
    <Fragment>
      {/* <Breadcrumbs title={summaryData?.title || ''} data={[{ title: 'Projects', link: `${process.env.PUBLIC_URL}/apps/project/list`}, { title: summaryData?.title || '' }]} /> */}
      <Nav pills className='mb-2'>
        <NavItem>
          <NavLink active={active === '1'} onClick={() => toggleTab('1')}>
            <User className='font-medium-3 me-50' />
            <span className='fw-bold'>Summary</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '2'} onClick={() => toggleTab('2')}>
            <Link className='font-medium-3 me-50' />
            <span className='fw-bold'>Tasks</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '3'} onClick={() => toggleTab('3')}>
            <Lock className='font-medium-3 me-50' />
            <span className='fw-bold'>Activities</span>
          </NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink active={active === '3'} onClick={() => toggleTab('3')}>
            <Lock className='font-medium-3 me-50' />
            <span className='fw-bold'>Gantt</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '4'} onClick={() => toggleTab('4')}>
            <Bookmark className='font-medium-3 me-50' />
            <span className='fw-bold'>Calendar</span>
          </NavLink>
        </NavItem> */}
        {/* <NavItem>
          <NavLink active={active === '5'} onClick={() => toggleTab('5')}>
            <Bell className='font-medium-3 me-50' />
            <span className='fw-bold'>Notes</span>
          </NavLink>
        </NavItem> */}
      </Nav>
      <TabContent activeTab={active} size='small'>
        <TabPane tabId='1'>
          <Summary team={teamData} summary={summaryData} projectId={projectId} />
          {/* <UserProjectsList /> */}
          {/* <UserTimeline /> */}
          {/* <InvoiceList /> */}
        </TabPane>
        <TabPane tabId='2'>
          {/* <SecurityTab /> */}
          <ProjectTasks projectName={summaryData?.title} />
        </TabPane>
        <TabPane tabId='3'>
          {/* <BillingPlanTab /> */}
          <ProjectActivities comingFrom={'content'} projectId={projectId} />
        </TabPane>
        {/* <TabPane tabId='4'> */}
          {/* <Notifications /> */}
          {/* This is calendar
        </TabPane> */}
        {/* <TabPane tabId='5'> */}
          {/* <Notifications /> */}
          {/* <Todo /> */}
        {/* </TabPane> */}
        {/* <TabPane tabId='5'>
          <Connections />
        </TabPane> */}
      </TabContent>
    </Fragment>
  )
}
export default UserTabs
