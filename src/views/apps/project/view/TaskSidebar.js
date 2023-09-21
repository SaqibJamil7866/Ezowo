import moment from 'moment'
import { useEffect, useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, ContentState } from 'draft-js'

import Sidebar from '@components/sidebar'
// import Avatar from '@components/avatar'
import Flatpickr from "react-flatpickr"

// ** Utils
import { selectThemeColors } from '@utils'
import '@styles/react/libs/editor/editor.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'

// ** Third Party Components
import Select, { components } from 'react-select'

// import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import { Button, Label, Form, Input } from 'reactstrap'

// ** User Avatars
import img1 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
// import img2 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
// import img3 from '@src/assets/images/portrait/small/avatar-s-4.jpg'
// import img4 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
// import img5 from '@src/assets/images/portrait/small/avatar-s-2.jpg'
// import img6 from '@src/assets/images/portrait/small/avatar-s-11.jpg'

import { addTask } from "../../../../services/Apis"
// import PickerDefault from '../../../forms/form-elements/datepicker/PickerDefault'
// import { post } from 'jquery'

const defaultValues = {
  title: '',
  description: ''
}

// const checkIsValid = data => {
//   return Object.values(data).every(field => {
//     console.error(' FIELD ', field)
//     return (typeof field === 'object' ? field !== null : field.length > 0)
//   })
// }

const TaskSidebar = ({ fetchProjectTasks, open, toggleSidebar, taskItem, types, priorities, taskStatusData, users, projectId }) => {
  
  // const [manager, setManager] = useState([])
  const [type, setType] = useState({})
  const [priority, setPriority] = useState({})
  const [taskStatus, setTaskStatus] = useState({})
  const [asssignedTo, setAssignedTo] = useState({})

  // const [desc, setDesc] = useState(EditorState.createEmpty())

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  
  const taskTypes = types.map((item) => {
    return { ...item, label: item.title }
  })

  const taskStatusOptions = taskStatusData.map((item) => {
    return { ...item, label: item.title }
  })

  const userOptions = users.map((item) => {
    return { ...item, value: item.id, label: `${item.first_name  } ${  item.last_name}`, img: img1 }
  })

  const taskPriorities = priorities.map((item) => {
    return { ...item, label: item.title }
  })

  useEffect(() => {
    if (taskItem && taskItem?.title) {

      setTitle(taskItem?.title)
      setDescription(taskItem?.description)
      setStartDate(taskItem?.start_date)
      setEndDate(taskItem?.end_date)
      
      if (taskItem?.type && taskItem?.type?.id) {
        const typo = taskTypes.filter(item => item.id === taskItem?.type?.id)
        if (typo && typo[0]) {
          setType(typo[0])
        }
      }

      if (taskItem?.priority && taskItem?.priority?.id) {
        const prori = taskPriorities.filter(item => item.id === taskItem?.priority?.id)
        if (prori && prori[0]) {
          setPriority(prori[0])
        }
      }

      if (taskItem?.status && taskItem?.status?.id) {
        const stata = taskStatusOptions.filter(item => item.id === taskItem?.status?.id)
        if (stata && stata[0]) {
          setTaskStatus(stata[0])
        }
      }

      if (taskItem?.assigned_to && taskItem?.assigned_to?.id) {
        const assignederTo = userOptions.filter(item => item.id === taskItem?.assigned_to?.id)
        if (assignederTo && assignederTo[0]) {
          setAssignedTo(assignederTo[0])
        }
      }

    }
  }, [taskItem])

  // const SelectComponent = ({ data, ...props }) => {
  //   return (
  //     <components.Option {...props}>
  //       <div className='d-flex flex-wrap align-items-center'>
  //         <Avatar className='my-0 me-50' size='sm' img={data.img} />
  //         {data.label}
  //       </div>
  //     </components.Option>
  //   )
  // }


  // ** Function to handle form submit
  const onSubmit = (e) => {
    e.preventDefault()
    // if (checkIsValid(data)) {

      // const obj = desc._immutable.currentContent.blockMap
      const postData = {
        title,
        // description: obj?._list?._tail?.array[0][1]?.text || '',
        description,
        type_id: type?.id, 
        priority_id: priority?.id, 
        status_id: taskStatus?.id, 
        assigned_to_id: asssignedTo?.id, 
        start_date: moment(startDate).format('YYYY-MM-DD'), 
        end_date: moment(endDate).format('YYYY-MM-DD'),  
        project_id: projectId
      }
      if (taskItem && taskItem?.id) {
        postData['id'] = taskItem?.id
      }
      // console.error(' POST ', postData)
      // return false
      addTask(postData)
        .then(res => {
          console.error(' RESPONSE ', res)
          if (res.response.code === 200) {
            toggleSidebar()
            fetchProjectTasks()
          } else {
            console.error(' ERROR: Adding Task')
          }
        })
        .catch(err => {
          console.log('ERROR: ', err)
        })

  }

  const handleSidebarClosed = () => {
    // for (const key in defaultValues) {
    //   setValue(key, '')
    // }
    setTaskStatus({})
    setAssignedTo({})
    setPriority({})
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='Task'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
      onClosed={handleSidebarClosed}
    >
      <Form onSubmit={onSubmit}>
        <div className='mb-1'>
          <Label className='form-label' for='title'>
            Task <span className='text-danger'>*</span>
          </Label>
            <Input id='title' value={title} placeholder='' onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='description'>
            Description <span className='text-danger'>*</span>
          </Label>
            <Input id='description' value={description} type='textarea' rows='8' placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
            {/* <Editor
              editorState={desc}
              wrapperClassName='toolbar-bottom'
              toolbar={{
                options: ['inline', 'textAlign'],
                inline: {
                  inDropdown: false,
                  options: ['bold', 'italic', 'underline']
                }
              }}
              onEditorStateChange={data => {
                setDesc(data)
              }}
            /> */}
        </div>
        <div className='mb-1'>
          <Label className="form-label" for='start_date'>
              Start Date <span className='text-danger'>*</span>
            </Label>
            <Flatpickr
              value={startDate}
              id='start_date'
              name='start_date'
              className="form-control"
              onChange={(date) => setStartDate(date[0])}
              options={{
                altInput: true,
                altFormat: "F j, Y",
                dateFormat: "Y-m-d"
              }}
            />
        </div>
        <div className='mb-1'>
        <Label className="form-label" for='end_date'>
            End Date <span className='text-danger'>*</span>
          </Label>
          <Flatpickr
            value={endDate}
            id='end_date'
            name='end_date'
            className="form-control"
            onChange={(date) => setEndDate(date[0])}
            options={{
              altInput: true,
              altFormat: "F j, Y",
              dateFormat: "Y-m-d"
            }}
          />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='taskType'>
            Select Type <span className='text-danger'>*</span>
          </Label>
          <div className='mb-1'>
            <Select
            name='taskType'
            id='taskType'
            isClearable={false}
            className='react-select'
            classNamePrefix='select'
            options={taskTypes}
            value={type}
            onChange={(item) => setType(item)}
            theme={selectThemeColors}
          />
          </div>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='taskPriority'>
            Select Priority <span className='text-danger'>*</span>
          </Label>
          <div className='mb-1'>
            <Select
            name='taskPriority'
            id='taskPriority'
            isClearable={false}
            className='react-select'
            classNamePrefix='select'
            options={taskPriorities}
            value={priority}
            onChange={(item) => setPriority(item)}
            theme={selectThemeColors}
          />
          </div>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='taskStatus'>
            Select Status <span className='text-danger'>*</span>
          </Label>
          <div className='mb-1'>
            <Select
            name='taskStatus'
            id='taskStatus'
            isClearable={false}
            className='react-select'
            classNamePrefix='select'
            options={taskStatusOptions}
            value={taskStatus}
            onChange={(item) => setTaskStatus(item)}
            theme={selectThemeColors}
          />
          </div>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='assignedTo'>
            Assigned To <span className='text-danger'>*</span>
          </Label>
          <Select
            id='assignedTo'
            isClearable={false}
            className='react-select'
            classNamePrefix='select'
            options={userOptions}
            value={asssignedTo}
            onChange={(item) => setAssignedTo(item)}
            theme={selectThemeColors}
          />
        </div>
        <Button type='submit' className='me-1' color='primary'>
          Submit
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
          Cancel
        </Button>
      </Form>
    </Sidebar>
  )
}

export default TaskSidebar
