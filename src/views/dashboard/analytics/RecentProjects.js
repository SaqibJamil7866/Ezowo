import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {useState, useEffect} from 'react'
import { getFormattedDate } from '@utils'
// ** Custom Components
import AvatarGroup from '@components/avatar-group'

// ** Images
// import react from '@src/assets/images/icons/react.svg'
// import figma from '@src/assets/images/icons/figma.svg'
// import vuejs from '@src/assets/images/icons/vuejs.svg'
// import angular from '@src/assets/images/icons/angular.svg'
// import bootstrap from '@src/assets/images/icons/bootstrap.svg'
import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import avatar3 from '@src/assets/images/portrait/small/avatar-s-7.jpg'

// ** Icons Imports
import { ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

import { getAllProjects } from "../../../services/Apis"

const avatarGroupData1 = [
  {
    title: 'Illiana',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Wyatt',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Troy',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData2 = [
  {
    title: 'Mufutau',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Denton',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Carol',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData3 = [
  {
    title: 'Kyla',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Hop',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Yvonne',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData4 = [
  {
    title: 'Lunea',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Francis',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Kameko',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData5 = [
  {
    title: 'Blair',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Aspen',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Tyler',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData6 = [
  {
    title: 'Florence',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Kieran',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Anthony',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData7 = [
  {
    title: 'Lysandra',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Russell',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Curran',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData8 = [
  {
    title: 'Britanney',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Avye',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Castor',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData9 = [
  {
    title: 'Charissa',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Elijah',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Giacomo',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData10 = [
  {
    title: 'Chaim',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Virginia',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Kristen',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const formatTeam = (team) => {
  const data = team.map((item) => {
    return { ...item, id: item?.first_name || 'N/A', title: item?.first_name || 'N/A', img: avatar1, imgWidth: 26, imgHeight: 26 }
  })
  return data
}

const RecentProjects = () => {

  const dispatch = useDispatch()
  const store = useSelector(state => state.home);

  const fetchProjects = () => {
    const params = {
      direction: 'desc',
      sort: 'id',
      active: 1
    }

    try {
      getAllProjects(params).then((res) => {
        const result = res?.response
        if (
          result &&
          (result.code === 200 || result.code === 400) &&
          result.data
        ) {
          // setProjects(result.data)
          dispatch({type:'home/setProjects', payload: result.data})
        }
      })
    } catch (error) {
      console.error('ERROR')
    }
  }

  useEffect(() => { 
    fetchProjects()
  }, [])

  const statusObj = {
    // pending: 'light-warning',
    true: 'light-primary',
    false: 'light-secondary'
  }


  return (
    store.projects && store.projects.length ? <Table responsive>
    <thead>
      <tr>
        <th>Project</th>
        <th>Manager</th>
        {/* <th>Team</th> */}
        <th>Date</th>
        <th>Status</th>
        {/* <th>Actions</th> */}
      </tr>
    </thead>
    <tbody>
    {store.projects.map((item, index) => {
        return (
          <tr className={item?.color || 'table-primary'} key={`projects${index}`}>
            <td>
              {/* <img className='me-75' src={angular} alt='angular' height='20' width='20' /> */}
              
              <Link
                to={`${process.env.PUBLIC_URL}/apps/project/${item.id}`}
                className='user_name text-truncate text-body'>
                <span className='align-middle fw-bolder' style={{color: '#7367f0'}}>{item.title}</span>
              </Link>
            </td>
            <td>{`${item?.manager?.first_name} ${item?.manager?.last_name}`}</td>
            {/* <td>
              {item.users && item.users.length ? <AvatarGroup data={formatTeam(item.users)} /> : null}
            </td> */}
            <td><span className='text-capitalize'>{getFormattedDate(item.start_date)} <ArrowRight size={14} className='me-20' /> {getFormattedDate(item.end_date)}</span></td>
            <td>
              <Badge className='text-capitalize' color={statusObj[item.active]} pill>
                {item.active ? 'Active' : "Inactive"}
              </Badge>
            </td>
          </tr>
        )
      })}
      
      {/* <tr className='table-secondary'>
        <td>
          <img className='me-75' src={vuejs} alt='vuejs' height='20' width='20' />
          <span className='align-middle fw-bold'>Vuejs Project</span>
        </td>
        <td>Jack Obes</td>
        <td>
          <AvatarGroup data={avatarGroupData4} />
        </td>
        <td>
          <Badge pill color='light-secondary'>
            Pending
          </Badge>
        </td>
      </tr>
      <tr className='table-success'>
        <td>
          <img className='me-75' src={bootstrap} alt='bootstrap' height='20' width='20' />
          <span className='align-middle fw-bold'>Bootstrap Project</span>
        </td>
        <td>Jerry Milton</td>
        <td>
          <AvatarGroup data={avatarGroupData5} />
        </td>
        <td>
          <Badge pill color='light-success'>
            Pending
          </Badge>
        </td>
      </tr>
      <tr className='table-danger'>
        <td>
          <img className='me-75' src={figma} alt='figma' height='20' width='20' />
          <span className='align-middle fw-bold'>Figma Project</span>
        </td>
        <td>Janne Ale</td>
        <td>
          <AvatarGroup data={avatarGroupData6} />
        </td>
        <td>
          <Badge pill color='light-danger'>
            Active
          </Badge>
        </td>
      </tr>
      <tr className='table-warning'>
        <td>
          <img className='me-75' src={react} alt='react' height='20' width='20' />
          <span className='align-middle fw-bold'>React Custom</span>
        </td>
        <td>Ted Richer</td>
        <td>
          <AvatarGroup data={avatarGroupData7} />
        </td>
        <td>
          <Badge pill color='light-warning'>
            Schedule
          </Badge>
        </td>
      </tr>
      <tr className='table-info'>
        <td>
          <img className='me-75' src={bootstrap} alt='bootstrap' height='20' width='20' />
          <span className='align-middle fw-bold'>Latest Bootstrap</span>
        </td>
        <td>Perry Parker</td>
        <td>
          <AvatarGroup data={avatarGroupData8} />
        </td>
        <td>
          <Badge pill color='light-info'>
            Pending
          </Badge>
        </td>
      </tr>
      <tr className='table-light'>
        <td>
          <img className='me-75' src={angular} alt='angular' height='20' width='20' />
          <span className='align-middle fw-bold'>Angular UI</span>
        </td>
        <td>Ana Bell</td>
        <td>
          <AvatarGroup data={avatarGroupData9} />
        </td>
        <td>
          <Badge pill color='light-primary'>
            Completed
          </Badge>
        </td>
      </tr>
      <tr className='table-dark'>
        <td>
          <img className='me-75' src={bootstrap} alt='bootstrap' height='20' width='20' />
          <span className='align-middle fw-bold'>Bootstrap UI</span>
        </td>
        <td>Jerry Milton</td>
        <td>
          <AvatarGroup data={avatarGroupData10} />
        </td>
        <td>
          <Badge pill color='light-dark'>
            Completed
          </Badge>
        </td>
      </tr> */}
    </tbody>
  </Table> : <>No projects found.</>
  )
}

export default RecentProjects
