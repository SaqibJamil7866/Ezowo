// ** React Imports
import { useContext } from 'react'
import { List } from 'react-feather'
import { Row, Col, Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
// ** Custom Components
// import Avatar from '@components/avatar'
// import Timeline from '@components/timeline'
// import AvatarGroup from '@components/avatar-group'

import { ThemeColors } from '@src/utility/context/ThemeColors'

import InvoiceList from '@src/views/apps/invoice/list'
import Sales from '@src/views/ui-elements/cards/analytics/Sales'
import CardAppDesign from '@src/views/ui-elements/cards/advance/CardAppDesign'
import UserTracker from './UserTracker'
import CardCongratulations from '@src/views/ui-elements/cards/advance/CardCongratulations'

// ** Images
// import jsonImg from '@src/assets/images/icons/json.png'
// import ceo from '@src/assets/images/portrait/small/avatar-s-9.jpg'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import RecentProjects from './RecentProjects'
import ProjectActivities from '../../apps/project/view/Activities'
import Announcements from '../../apps/project/view/Announcements'
import DashboardTasks from './DashboardTasks'

const AnalyticsDashboard = () => {
  // ** Context
  const { colors } = useContext(ThemeColors)

  const userId = JSON.parse(localStorage?.userData)?.id || 0

  // ** Vars
  // const avatarGroupArr = [
  //   {
  //     imgWidth: 33,
  //     imgHeight: 33,
  //     title: 'Billy Hopkins',
  //     placement: 'bottom',
  //     img: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default
  //   },
  //   {
  //     imgWidth: 33,
  //     imgHeight: 33,
  //     title: 'Amy Carson',
  //     placement: 'bottom',
  //     img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default
  //   },
  //   {
  //     imgWidth: 33,
  //     imgHeight: 33,
  //     title: 'Brandon Miles',
  //     placement: 'bottom',
  //     img: require('@src/assets/images/portrait/small/avatar-s-8.jpg').default
  //   },
  //   {
  //     imgWidth: 33,
  //     imgHeight: 33,
  //     title: 'Daisy Weber',
  //     placement: 'bottom',
  //     img: require('@src/assets/images/portrait/small/avatar-s-7.jpg').default
  //   },
  //   {
  //     imgWidth: 33,
  //     imgHeight: 33,
  //     title: 'Jenny Looper',
  //     placement: 'bottom',
  //     img: require('@src/assets/images/portrait/small/avatar-s-20.jpg').default
  //   }
  // ]
  
  // const data = [
  //   {
  //     title: '12 Invoices have been paid',
  //     content: 'Invoices have been paid to the company.',
  //     meta: '',
  //     metaClassName: 'me-1',
  //     customContent: (
  //       <div className='d-flex align-items-center'>
  //         <img className='me-1' src={jsonImg} alt='data.json' height='23' />
  //         <span>data.json</span>
  //       </div>
  //     )
  //   },
  //   {
  //     title: 'Client Meeting',
  //     content: 'Project meeting with john @10:15am.',
  //     meta: '',
  //     metaClassName: 'me-1',
  //     color: 'warning',
  //     customContent: (
  //       <div className='d-flex align-items-center'>
  //         <Avatar img={ceo} />
  //         <div className='ms-50'>
  //           <h6 className='mb-0'>John Doe (Client)</h6>
  //           <span>CEO of Infibeam</span>
  //         </div>
  //       </div>
  //     )
  //   },
  //   {
  //     title: 'Create a new project for client',
  //     content: 'Add files to new design folder',
  //     color: 'info',
  //     meta: '',
  //     metaClassName: 'me-1',
  //     customContent: <AvatarGroup data={avatarGroupArr} />
  //   },
  //   {
  //     title: 'Create a new project for client',
  //     content: 'Add files to new design folder',
  //     color: 'danger',
  //     meta: '',
  //     metaClassName: 'me-1'
  //   }
  // ]

  return (
    <div id='dashboard-analytics'>
      <Row className='match-height'>
        <Col lg='5' sm='12'>
          <CardCongratulations />
        </Col>
        <Col lg='7' sm='12'>
          {/* <Card className='card-user-timeline'>
            <div style={{maxHeight: '200px', height: 'calc(100% - 4.45rem) !important', overflowY: 'scroll'}}>
              <Announcements userId={userId} limit={20} />
            </div>
          </Card> */}
          <Card className='card-user-timeline'>
              <CardHeader>
                <div className='d-flex align-items-center'>
                  <List className='user-timeline-title-icon' />
                  <CardTitle tag='h4'>Announcements</CardTitle>
                </div>
              </CardHeader>
              <CardBody>
                <Announcements userId={userId}/>
              </CardBody>
            </Card>
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='5' xs='12'>
          <UserTracker primary={colors.primary.main} danger={colors.danger.main} />
        </Col>
        <Col lg='7' xs='12'>
          <DashboardTasks />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col xxl="7" xs="12">
            {/* col-12 col-xl-12 col-xxl-7 */}
            <Card className='card-user-timeline'>
              <CardHeader>
                <div className='d-flex align-items-center'>
                  {/* <List className='user-timeline-title-icon' /> */}
                  <CardTitle tag='h4'>My Projects</CardTitle>
                </div>
              </CardHeader>
              <CardBody>
              <RecentProjects />
              </CardBody>
            </Card>
            
          </Col>
          <Col lg='5' xs='12'>
            <Card className='card-user-timeline'>
              <CardHeader>
                <div className='d-flex align-items-center'>
                  <List className='user-timeline-title-icon' />
                  <CardTitle tag='h4'>Activities</CardTitle>
                </div>
              </CardHeader>
              <CardBody style={{maxHeight: '324px', height: 'calc(100% - 4.45rem) !important', overflowY: 'scroll'}}>
                {/* <Timeline className='ms-50 mb-0' data={data} /> */}
                <ProjectActivities userId={userId} limit={20} comingFrom={'dashboard'} />
              </CardBody>
            </Card>
          </Col>
      </Row>
    </div>
  )
}

export default AnalyticsDashboard