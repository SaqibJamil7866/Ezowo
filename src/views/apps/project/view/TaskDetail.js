import { useParams } from 'react-router-dom'
import { Spinner, Badge, Card, CardBody, CardText, Row, Col, Input, Button } from 'reactstrap'
import { Fragment, useState, useEffect } from 'react'
import UILoader from '@components/ui-loader'
import { selectThemeColors } from '@utils'
import Select, { components } from 'react-select'
import toast from 'react-hot-toast'

import img1 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import Breadcrumbs from '@components/breadcrumbs'

import Avatar from '@components/avatar'

import { getTaskDetail, saveTaskComment, getAllTaskStatus, getAllUsers, getAllTaskPriorities, getAllTaskTypes, deleteTaskComment, addTask } from "../../../../services/Apis"

import '@styles/react/pages/page-profile.scss'

// const SelectComponent = ({ data, ...props }) => {
//     return (
//       <components.Option {...props}>
//         <div className='d-flex flex-wrap align-items-center'>
//           {/* <Avatar className='my-0 me-50' size='sm' img={data.img} /> */}
//           {data.label}
//         </div>
//       </components.Option>
//     )
// }
const TaskDetail = () => {

    const projectId = useParams().projectId
    const taskId = useParams().id

    // const [data, setData] = useState(null)
    const [taskComment, setTaskComment] = useState('')
    const [comments, setComments] = useState([])
    const [taskStatus, setTaskStatus] = useState([])
    const [allUsers, setAllUsers] = useState([])
    // const [allUsersData, setAllUsersData] = useState([])
    const [taskPriorities, setTaskPriorities] = useState([])
    const [taskTypes, setTaskTypes] = useState([])
    const [taskItem, setTaskItem] = useState({})
    
    const [selectedTaskStatus, setSelectedTaskStatus] = useState({})
    const [selectedAssignedTo, setSelectedAssignedTo] = useState({})
    const [selectedReportedBy, setSelectedReportedBy] = useState({})
    const [selectedPriority, setSelectedPriority] = useState({})
    const [selectedType, setSelectedType] = useState({})
    
    const [postCommentProgress, setPostCommentProgress] = useState(false)
    const [deleteProgress, setDeleteProgress] = useState(false)
    
    const getTaskTypes = () => {
        getAllTaskTypes().then((res) => {
          const result = res.response
          if (
            result &&
            (result.code === 200 || result.code === 400) &&
            result.data
          ) {
            const taskTypes1 = result.data.map((item) => {
                return { ...item, label: item.title }
              })
            setTaskTypes(taskTypes1)
          }
        })
    }

    const getTaskPriorities = () => {
        getAllTaskPriorities().then((res) => {
          const result = res.response
          if (
            result &&
            (result.code === 200 || result.code === 400) &&
            result.data
          ) {
                const taskPriorities1 = result.data.map((item) => {
                  return { ...item, label: item.title }
                })
                setTaskPriorities(taskPriorities1)
          }
        })
    }    

    const getTaskStatus = () => {
        getAllTaskStatus().then((res) => {
          const result = res.response
          if (
            result &&
            (result.code === 200 || result.code === 400) &&
            result.data
          ) {
            const taskStatusOptions = result.data.map((item) => {
                return { ...item, label: item.title }
              })
            setTaskStatus(taskStatusOptions)
          }
        })
    }

    const postTaskComment = () => {
      setPostCommentProgress(true)
        const params = {
        task_id: taskId,
        comment: taskComment || ''
        }
        
        if (!taskComment) {
          setPostCommentProgress(false)
          return false
        }

        saveTaskComment(params).then((res) => {
        setPostCommentProgress(false)
        const result = res.response
        if (
            result &&
            (result.code === 200 || result.code === 400) &&
            result.data
        ) {
                setTaskComment('')
                setComments(current => [result.data, ...comments])
            }
        })
    }

    const deleteComment = (commentId) => {
        setDeleteProgress(true)
        const params = {
        id: commentId
        }
        deleteTaskComment(params).then((res) => {
        setDeleteProgress(false)
        const result = res.response
        if (
            result &&
            (result.code === 200 || result.code === 400)
        ) {
              toast.success('Task comment deleted!')
              setComments(comments.filter(item => item.id !== commentId))
            } else {
              toast.error('ERROR: Deleting task comment!')
            }
        })
    }

    const fetchTaskDetail = () => {
        const params = {
        task_id: taskId
        }
        try {
          getTaskDetail(params).then((res) => {
            const result = res.response
            if (
              result &&
              (result.code === 200 || result.code === 400) &&
              result?.data && result?.data[0]
            ) {
              setTaskItem(result?.data[0])
              setComments(result?.data[0].task_comments)

              if (result?.data[0]?.status?.id) {
                result.data[0].status.label = result?.data[0]?.status?.title
                setSelectedTaskStatus(result?.data[0]?.status)
              }
              if (result?.data[0]?.assigned_to?.id) {
                result.data[0].assigned_to.label = `${result?.data[0]?.assigned_to?.first_name  } ${  result?.data[0]?.assigned_to?.last_name}`
                result.data[0].assigned_to.value = result?.data[0]?.assigned_to?.id
                setSelectedAssignedTo(result?.data[0]?.assigned_to)
              }
              if (result?.data[0]?.priority?.id) {
                result.data[0].priority.label = result?.data[0]?.priority?.title
                setSelectedPriority(result?.data[0]?.priority)
              }
              if (result?.data[0]?.type?.id) {
                result.data[0].type.label = result?.data[0]?.type?.title
                setSelectedType(result?.data[0]?.type)
              }
              if (result?.data[0]?.reported_by_task && result?.data[0]?.reported_by_task?.id) {
                result.data[0].reported_by_task.label = `${result?.data[0]?.reported_by_task.first_name  } ${  result?.data[0]?.reported_by_task.last_name}`
                setSelectedReportedBy(result?.data[0]?.reported_by_task)
              }

            }
          })
        } catch (error) {
          console.error('Error') 
        }
    }
    
    const fetchUsers = () => {
      getAllUsers({type: 'dropdown'}).then((res) => {
        const result = res.response
        if (
          result &&
          (result.code === 200 || result.code === 400) &&
          result.data
        ) {
          // setAllUsersData(result.data)
          const userOptions = result.data.map((item) => {
              return { ...item, value: item.id, label: `${item.first_name  } ${  item.last_name}`, img: img1 }
          })
          setAllUsers(userOptions)
        }
      })
    }

    const updateTaskField = (field, value) => {
      const postData = { project_id: projectId, id: taskId }
      postData[field] = value
      addTask(postData)
      .then(res => {
        if (res.response.code === 200) {
          const result = res.response
          if (result) {
            if (field === 'status_id' && result?.data?.status_id) {
              const found = taskStatus.filter(item => item.id === result?.data?.status_id)
              setSelectedTaskStatus(found[0] || {})
            }
            if (field === 'assigned_to_id' && result?.data?.assigned_to_id) {
              const found = allUsers.filter(item => item.id === result?.data?.assigned_to_id)
              setSelectedAssignedTo(found[0] || {})
            }
            if (field === 'reported_by' && result?.data?.reported_by) {
              const found = allUsers.filter(item => item.id === result?.data?.reported_by)
              setSelectedReportedBy(found[0] || {})
            }
            if (field === 'priority_id' && result?.data?.priority_id) {
              const found = taskPriorities.filter(item => item.id === result?.data?.priority_id)
              setSelectedPriority(found[0] || {})
            }
            if (field === 'type_id' && result?.data?.type_id) {
              const found = taskTypes.filter(item => item.id === result?.data?.type_id)
              setSelectedType(found[0] || {})
            }
          }

          toast.success('Task successfully updated!')
        } else {
          toast.error("Error Updating Task")
        }
      })
      .catch(err => {
        console.log('ERROR: ', err)
        toast.error("ERROR: ", err)
      })
    }
    
    useEffect(() => {
        fetchUsers()
        getTaskStatus()
        getTaskPriorities()
        getTaskTypes()
        fetchTaskDetail()
    }, [])

    return (
    <Fragment>
      <h2 className='content-header-title float-start mb-0'>{taskItem?.title}</h2>
      <Breadcrumbs title="" data={[{ title: 'Project', link: `${process.env.PUBLIC_URL}/apps/project/${projectId}` }, { title: 'Task', link: `${process.env.PUBLIC_URL}/apps/project/${projectId}` }, { title: taskItem?.title }]} />
      {taskItem !== null ? (
        <div id='user-profile'>
          <section id='profile-info'>
            <Row>
              <Col lg={{ size: 9, order: 1 }} sm={{ size: 12 }} xs={{ order: 1 }}>
                <Card className='post'>
                    <CardBody>
                        {/* {taskItem?.description && <CardText>{taskItem?.description}</CardText>} */}
                        <p
                          dangerouslySetInnerHTML={{
                            __html: taskItem?.description
                          }}
                        />
                        <fieldset className='form-label-group mb-50'>
                        <h5 className='form-check-label mt-2' htmlFor='add-comment'>
                            Add Comment
                        </h5>
                        <Input style={{width: '85%'}} id='add-comment' onChange={e => setTaskComment(e.target.value)} value={taskComment} type='textarea' rows='4' placeholder='Enter your comment...' />
                        </fieldset>
                        <Button color='primary' disabled={postCommentProgress} size='sm' onClick={postTaskComment}>
                        {postCommentProgress && <Spinner size='sm' />} Post Comment
                        </Button>
                        {taskComment?.length ? <Button color='secondary' style={{marginLeft: '10px'}} size='sm' onClick={e => setTaskComment('')}>
                        Cancel
                        </Button> : null}
                        {comments.map((comment, index) => (
                        <div key={comment.id} className='d-flex align-items-start mb-1 mt-3'>
                            <Avatar img={comment.avatar} className='mt-25 me-75' imgHeight='34' imgWidth='34' />
                            <div className='profile-user-info w-100'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <h6 className='mb-0'>{comment.commented_by_name || 'N/A'}</h6>
                                <Badge color='primary' pill className='badge-glow align-middle'>
                                    {comment.created}
                                </Badge>
                                
                            </div>
                            <div style={{width: '85%'}}>{comment.comment}</div>
                            <div className='mt-1'>
                                <Badge color='primary' pill className='cursor-pointer align-middle'>
                                    Edit
                                </Badge>
                                <Badge disabled={deleteProgress} onClick={() => deleteComment(comment.id)} color='danger' pill className='cursor-pointer align-middle' style={{marginLeft: '10px'}}>
                                {deleteProgress && <Spinner size='sm' />} Delete
                                </Badge>
                            </div>
                            </div>
                        </div>
                        ))}
                    </CardBody>
                    </Card>
              </Col>
              <Col lg={{ size: 3, order: 2 }} sm={{ size: 12 }} xs={{ order: 2 }}>
                <Fragment>
                    <Card className='invoice-action-wrapper'>
                        <CardBody>
                            <div className='invoice-payment-option mt-0'>
                                <h6 className='mb-50'>Status</h6>
                                <Select
                                    id='task-status'
                                    name='task-status'
                                    isClearable={false}
                                    className='react-select'
                                    classNamePrefix='select'
                                    value={selectedTaskStatus}
                                    options={taskStatus}
                                    onChange={(item) => updateTaskField('status_id', item?.id || '') }
                                    theme={selectThemeColors}
                                />
                            </div>
                            <div className='invoice-payment-option mt-2'>
                                <h6 className='mb-50'>Assigned To</h6>
                                <Select
                                    id='assigned-to'
                                    name='assigned-to'
                                    isClearable={false}
                                    className='react-select'
                                    classNamePrefix='select'
                                    value={selectedAssignedTo}
                                    options={allUsers}
                                    onChange={(item) => updateTaskField('assigned_to_id', item?.id || '') }
                                    theme={selectThemeColors}
                                />
                            </div>
                            <div className='invoice-payment-option mt-2'>
                                <h6 className='mb-50'>Reported By</h6>
                                <Select
                                    id='reported-by'
                                    name='reported-by'
                                    isClearable={false}
                                    className='react-select'
                                    classNamePrefix='select'
                                    value={selectedReportedBy}
                                    options={allUsers}
                                    onChange={(item) => updateTaskField('reported_by', item?.id || '') }
                                    theme={selectThemeColors}
                                />
                            </div>
                            <div className='invoice-payment-option mt-2'>
                                <h6 className='mb-50'>Priority</h6>
                                <Select
                                    id='task-priority'
                                    name='task-priority'
                                    isClearable={false}
                                    className='react-select'
                                    classNamePrefix='select'
                                    value={selectedPriority}
                                    options={taskPriorities}
                                    onChange={(item) => updateTaskField('priority_id', item?.id || '') }
                                    theme={selectThemeColors}
                                />
                            </div>
                            <div className='invoice-payment-option mt-2'>
                                <h6 className='mb-50'>Type</h6>
                                <Select
                                    id='task-type'
                                    name='task-type'
                                    isClearable={false}
                                    className='react-select'
                                    classNamePrefix='select'
                                    value={selectedType}
                                    options={taskTypes}
                                    onChange={(item) => updateTaskField('type_id', item?.id || '') }
                                    theme={selectThemeColors}
                                />
                            </div>
                            <div className='invoice-terms mt-3'>
                                <div className='d-flex justify-content-between'>
                                    <Badge color='primary' pill className='badge-glow'>
                                        Created: {taskItem.created}
                                    </Badge>
                                </div>
                                <div className='d-flex justify-content-between mt-1'>
                                    <Badge color='dark' pill className='badge-glow'>
                                        Last updated: {taskItem.updated}
                                    </Badge>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    
                    </Fragment>
              </Col>
            </Row>

          </section>
        </div>
      ) : null}
    </Fragment>
  )
}

export default TaskDetail
