import { Link } from 'react-router-dom'
import { ArrowRight } from 'react-feather'
import {useState, useEffect} from 'react'
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { taskStatusMeta, taskPriorityMeta, getFormattedDate } from '@utils'
import { getAllDashboardTasks } from "../../../services/Apis"

const DashboardTasksData = ({due_date}) => {

  const [tasks, setTasks] = useState([])

  const fetchTasks = () => {
    const params = {
      due_date,
      user_id: JSON.parse(localStorage.getItem('userData')).id
    }
    try {
      getAllDashboardTasks(params).then((res) => {
        const result = res?.response
        if (
          result &&
          (result.code === 200 || result.code === 400) &&
          result.data
        ) {
          setTasks(result.data)
        }
      })
    } catch (error) {
      console.error('ERROR')
    }
  }

  useEffect(() => { 
    fetchTasks()
  }, [])

  const statusObj = {
    // pending: 'light-warning',
    true: 'light-primary',
    false: 'light-secondary'
  }


  return (
    tasks && tasks.length ? <Table responsive>
    <thead>
      <tr>
        <th>Title</th>
        <th>Date</th>
        <th>Priority</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
    {tasks.map((item, index) => {
        return (
          // <tr className={item?.color || 'table-primary'} key={`tasks-dashboard${index}`}>
          <tr className='' key={`tasks-dashboard${index}`}>
            <td>
              <Link
                to={`${process.env.PUBLIC_URL}/apps/project/${item.project_id}/task/${item.id}`}
                className='user_name text-truncate text-body'>
                <span className='align-middle fw-bolder' style={{color: '#7367f0'}}>{item.title}</span>
              </Link>
            </td>
            <td><span className='text-capitalize'>{getFormattedDate(item.start_date)} <ArrowRight size={14} className='me-20' /> {getFormattedDate(item.end_date)}</span></td>
            <td>
              <Badge className='text-capitalize' color={taskPriorityMeta[item.priority?.value]} pill>
                {item.priority?.title}
              </Badge>
            </td>
            <td>
              <Badge className='text-capitalize' color={taskStatusMeta[item.status?.value]} pill>
                {item.status?.title}
              </Badge>
            </td>
          </tr>
        )
      })}

    </tbody>
  </Table> : <>No tasks found.</>
  )
}

export default DashboardTasksData
