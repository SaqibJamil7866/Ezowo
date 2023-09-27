// ** React Imports
import { useContext, lazy, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List, Plus } from 'react-feather'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Modal, ModalHeader, ModalBody, ModalFooter,
  Button } from 'reactstrap'
// ** Custom Components
// import Avatar from '@components/avatar'
// import Timeline from '@components/timeline'
// import AvatarGroup from '@components/avatar-group'

import { ThemeColors } from '@src/utility/context/ThemeColors'

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
import { handleStickyNotes } from '@store/navbar'

const AnnouncementForm = lazy(() => import('../../announcements'))
const StickyNotes = lazy(() => import('../../apps/sticky-notes'))

const AnalyticsDashboard = () => {
  // ** Context
  const { colors } = useContext(ThemeColors);
  const dispatch = useDispatch();
  const store = useSelector(state => state);

  const userId = JSON.parse(localStorage?.userData)?.id || 0;

  const handleAnnouncements = (val) => {
    dispatch({type: 'home/setAnnouncementModalState', payload: {isOpen: val}})
  }

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
                <div className='d-flex align-items-center width-full justify-content-between'>
                  {/* <List className='user-timeline-title-icon' /> */}
                  <CardTitle tag='h4'>
                    Announcements
                  </CardTitle>
                  <Button color="primary" onClick={() => handleAnnouncements(true)}>
                    {/* <Plus />  */}
                    Add Announcements
                  </Button>
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
                  {/* <List className='user-timeline-title-icon' /> */}
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

      {/* Stick Notes modal */}
      <Modal
        isOpen={store.navbar.isOpenStickyNotes}
        scrollable={true}
        size='lg'
        className='modal-dialog-centered'
        onClosed={() => dispatch(handleStickyNotes(false))}
      >
        <ModalHeader>Sticky Notes</ModalHeader>
        <ModalBody>
          <StickyNotes />
        </ModalBody>
        <ModalFooter>
          <Button color='flat-danger' onClick={() => dispatch(handleStickyNotes(false))}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      {/* Announcement Modal */}
      <Modal
        isOpen={store.home.announcementModal?.isOpen}
        scrollable={true}
        size='lg'
        className='modal-dialog-centered'
        onClosed={() => handleAnnouncements(false)}
      >
        <ModalHeader>Announcement</ModalHeader>
        <AnnouncementForm fromWhere="popup"  handleClose={() => handleAnnouncements(false)} />
      </Modal>
    </div>
  )
}

export default AnalyticsDashboard
