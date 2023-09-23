import { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
// import Avatar from '@components/avatar'
import Timeline from '@components/timeline'
// import pdf from '@src/assets/images/icons/file-icons/pdf.png'
// import ceo from '@src/assets/images/portrait/small/avatar-s-7.jpg'
// import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

import { getProjectActivities } from "../../../../services/Apis"
import moment from 'moment'
import ReactTimeAgo from 'react-time-ago'

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

const Activities = ({projectId, userId, limit, comingFrom}) => {

  const [activities, setActivities] = useState([])
  
  const formatEntity = (data) => {
    let str = ''
    if (data === 'TaskComments') {
      str = 'Task Comment'
    } else if (data === 'UserDepartments') {
      str = 'User Department'
    } else if (data === 'Tasks') {
      str = 'Task'
    } else if (data === 'ProjectUsers') {
      str = 'User'
    } else if (data === 'Users') {
      str = 'User'
    } else if (data === 'Notes') {
      str = 'Project Note'
    } else if (data === 'Projects') {
      str = 'Project'
    }
    // if (!str) return data
    return str
  }

  const formatColor = (action) => {
    let str = ''
    if (action === 'create') {
      str = ''
    } else if (action === 'delete') {
      str = 'danger'
    }
    if (!str) return ''
    return str
  }

  const formatData = (data) => {
    const jsonData = data.filter(function (dt) {
        return dt.entity !== "ProjectAnnouncements"
      }).map((item) => {
        return { ...item, meta: <ReactTimeAgo date={new Date(item.created)} />, title: `${formatEntity(item.entity)} ${item.action}d`, content: `${item?.actor?.first_name  } ${ item.actor?.last_name  } ${item.action  }d a ${formatEntity(item.entity)}`, color: formatColor(item.action) }
    })
    setActivities(jsonData)
  }

  const fetchProjectActivities = () => {
    const params = {}
    if (projectId) {
      params['id'] = projectId
    } else if (userId) {
      params['user_id'] = userId
    }
    if (limit) {
      params['limit'] = limit
    }

    getProjectActivities(params).then((res) => {
      const result = res.response
      if (
        result &&
        (result.code === 200 || result.code === 400) &&
        result.data
      ) {
        formatData(result.data)
        // setActivities(data)
      }
    })
  }

  useEffect(() => {
    fetchProjectActivities()
  }, [])

  return (
    comingFrom === 'content' ? <Card>
      <CardBody className='pt-1'>
        {activities && activities?.length ? <Timeline data={activities} className='ms-50' /> : <>No activities found.</>}
      </CardBody>
    </Card> : activities && activities?.length ? <Timeline data={activities} className='ms-50' /> : <>No activities found.</>
  )
}

export default Activities