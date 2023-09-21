import { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
// import Avatar from '@components/avatar'
import AnnouncementTimeline from '@components/timeline/AnnouncementLine'
// import pdf from '@src/assets/images/icons/file-icons/pdf.png'
// import ceo from '@src/assets/images/portrait/small/avatar-s-7.jpg'
// import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

import { getAnnouncements } from "../../../../services/Apis"

// const data = [
//   {
//     title: 'User login',
//     content: 'User login at 2:12pm',
//     meta: '12 mins ago'
//   },
//   {
//     title: 'Meeting with john',
//     content: 'React Project meeting with john @10:15am',
//     meta: '45 mins ago',
//     color: 'warning',
//     customContent: (
//       <div className='d-flex align-items-center mb-50'>
//         <Avatar img={ceo} imgHeight={38} imgWidth={38} />
//         <div className='ms-50'>
//           <h6 className='mb-0'>Leona Watkins (Client)</h6>
//           <span>CEO of Pixinvent</span>
//         </div>
//       </div>
//     )
//   },
//   {
//     title: 'Create a new react project for client',
//     content: 'Add files to new design folder',
//     meta: '2 days ago',
//     color: 'info'
//   },
//   {
//     title: 'Create Invoices for client',
//     content: 'Create new Invoices and send to Leona Watkins',
//     meta: '12 mins ago',
//     color: 'danger',
//     customContent: (
//       <div className='d-flex align-items-center'>
//         <img className='me-1' src={pdf} alt='pdf' height='23' />
//         <h6 className='mb-0'>invoice.pdf</h6>
//       </div>
//     )
//   }
// ]

const Announcements = ({userId}) => {

  const [announcements, setAnnouncements] = useState([])
  const formatData = (data) => {
    const jsonData = data.map((item) => {
      return { ...item, meta: `Sent by ${item?.user?.first_name} at ${item.created}`, title: item.title, content: item.details, color: '' }
    })
    setAnnouncements(jsonData)
  }

  const fetchAnnouncements = () => {
    const params = {}
    if (userId) {
      params['user_id'] = userId
    }
    // if (limit) {
    //   params['limit'] = limit
    // }

    getAnnouncements(params).then((res) => {
      const result = res.response
      if (
        result &&
        (result.code === 200 || result.code === 400) &&
        result.data
      ) {
        formatData(result.data)
        // setAnnouncements(data)
      }
    })
  }

  useEffect(() => {
    fetchAnnouncements()
  }, [])

  return (
    <Row>
      <Col lg='12' md='12' sm='12' style={{maxHeight: '118px', height: 'calc(100% - 4.45rem) !important', overflowY: 'scroll'}}>
        
        {/* <Card>
          <CardHeader>
            <CardTitle tag='h4'>Announcements</CardTitle>
          </CardHeader>
          <CardBody className='pt-1'> */}
            {announcements && announcements?.length ? <AnnouncementTimeline data={announcements} className='ms-50' /> : <>No announcements found.</>}
            
          {/* </CardBody>
        </Card> */}
      </Col>
    </Row>
    
  )
}

export default Announcements