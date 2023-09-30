import { Badge, Card, CardBody } from 'reactstrap'
import AvatarGroup from '@components/avatar-group'

import { Paperclip, MessageSquare, Calendar } from 'react-feather'
import { taskPriorityMeta } from '@utils'
import moment from 'moment'

const KanbanTasks = props => {
  // ** Props
  const { task } = props
  const handleTaskClick = () => {
    // dispatch(handleSelectTask(task))
    // handleTaskSidebarToggle()
  }

  const renderLabels = () => {
    return (
      // <div className='mb-1'>
        <Badge className='text-capitalize mr-1' label={task.priority?.title} color={taskPriorityMeta[task.priority?.value]} pill>
            {task.priority?.title}
          </Badge>
      // </div>
    )
  }

  const renderAttachmentsComments = () => {
    if ((task.task_comments)) {
      return (
        <div className='d-flex align-items-center justify-content-between width-full' style={{marginLeft: '10px'}}>
          {/* {task.attachments && task.attachments.length ? (
            <div className='d-flex align-items-center cursor-pointer me-75'>
              <Paperclip size={16} className='me-25' />
              <span>{task.attachments.length}</span>
            </div>
          ) : null} */}
          {/* {task.task_comments && task.task_comments.length ? ( */}
            <div className='d-flex align-items-center cursor-pointer'>
              <MessageSquare size={16} className='me-50' />
              <span>{task.task_comments.length}</span>
            </div>
            <div className='d-flex align-items-center cursor-pointer' title={`Due date: ${moment(task.end_date).format('MM/DD/YYYY')}`}>
              <Calendar size={16} className='me-50' /> 
              <span className='red'>{moment(task.end_date).format('MM/DD/YYYY')}</span>
            </div>
          {/* ) : null} */}
        </div>
      )
    } else {
      return null
    }
}
  const taskFooterClasses = () => {
    // if (task.task_comments) {
    //   return 'justify-content-end'
    // } else {
      return 'justify-content-start'
    // }
  }

  const renderTaskFooter = () => {
    return (task.task_comments) ||
      (task.assigned_to) ? (
      <div className={`task-footer d-flex align-items-center mt-1 ${taskFooterClasses()}`}>
        {renderLabels()}
        {renderAttachmentsComments()}
        {/* {task.assigned_to ? (
          <div className='justify-content-end'><AvatarGroup data={[task.assigned_to]} /></div>
        ) : null} */}
      </div>
    ) : null
  }

  return (
    <Card onClick={handleTaskClick} className='task' data-board-id={task.boardId} data-task-id={task.id}>
      <CardBody data-task-id={task.id} className="p-1">
        <span className='task-title'>{task.title} </span>
        {renderTaskFooter()}
      </CardBody>
    </Card>
  )
}

export default KanbanTasks
