import { TwitterPicker } from 'react-color'
import Flatpickr from "react-flatpickr"
import { useEffect, useState } from 'react'
import Sidebar from '@components/sidebar'
import Avatar from '@components/avatar'
// import { useForm } from 'react-hook-form'
import { Button, Label, Form, Input } from 'reactstrap'
import img1 from '@src/assets/images/portrait/small/avatar-s-3.jpg'

import '@styles/react/libs/flatpickr/flatpickr.scss'
import Select, { components } from 'react-select'

import { selectThemeColors } from '@utils'
import { addProject, getAllProjects } from "../../../../services/Apis"
import moment from 'moment'

const SidebarNewUsers = ({ fetchProjects, open, toggleSidebar, taskItem, users, fromWhere }) => {
  
  const [manager, setManager] = useState({})
  const [team, setTeam] = useState([])
  const [templates, setTemplates] = useState([])
  const [template, setTemplate] = useState({is_template: false})
  const [showPicker, setShowPicker] = useState(false)


  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [color, setColor] = useState('')
  
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  
  const SelectComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <div className='d-flex flex-wrap align-items-center'>
          <Avatar className='my-0 me-50' size='sm' img={data.img} />
          {data.label}
        </div>
      </components.Option>
    )
  }

  const selectOptions = users.map((item) => {
    return { ...item, value: item.id, label: `${item.first_name  } ${  item.last_name}`, img: img1 }
  })

  const populateProjectForm = (task) => {
    
    setDescription(task?.description)
    setColor(task?.color)
    setStartDate(task?.start_date)
    setEndDate(task?.end_date)
    if (task?.manager && task?.manager?.id) {
      const manager = selectOptions.filter(item => item.id === task?.manager?.id)
      if (manager && manager[0]) {
        setManager(manager[0])
      }
    }

    const data = task?.users.map((item) => {
      return { ...item, value: item.id, label: `${item.first_name  } ${  item.last_name}`, img: img1 }
    })
    setTeam(data || [])
  }
  
  useEffect(() => {
    if (taskItem && taskItem?.title) {
      setTitle(taskItem?.title);
      setTemplate({is_template: taskItem?.is_template})
      populateProjectForm(taskItem)
    }
  }, [taskItem])

  const fetTemplates = () => {
    const params = {
      is_template: 1,
      active: 1 
    }

    getAllProjects(params).then((res) => {
      const result = res?.response
      if (
        result &&
        (result.code === 200 || result.code === 400) &&
        result.data
      ) {
        setTemplates(result.data)
      }
    })
  }

  useEffect(()=>{
    if(fromWhere != 'template'){
      fetTemplates()
    }
  }, [fromWhere])
  
  // ** Function to handle form submit
  const onSubmit = (e) => {
    e.preventDefault()
    // if (checkIsValid(data)) {
      const teamIds = team.map((item) => {
        return item.id
      })
      const postData = {
        title,
        description,
        start_date: moment(startDate).format('YYYY-MM-DD'), 
        end_date: moment(endDate).format('YYYY-MM-DD'), 
        team: teamIds, 
        manager_id: manager?.id, 
        color,
        active: 1, 
        status: 'active',
        is_template: fromWhere == 'template' ? true : template.is_template,
      }
      if (taskItem && taskItem?.id) {
        postData['id'] = taskItem?.id
      }

      addProject(postData)
        .then(res => {
          if (res.response.code === 200) {
            toggleSidebar()
            fetchProjects()
          } else {
            console.error(' ERROR: Adding Project')
          }
        })
        .catch(err => {
          console.log('ERROR: ', err)
        })


    // } else {
    //   console.error('ERROR')
    //   for (const key in data) {
    //     if (data[key] !== null && data[key].length === 0) {
    //       setError(key, {
    //         type: 'manual'
    //       })
    //     }
    //   }
    // }
  }

  const handleSidebarClosed = () => {
    // for (const key in defaultValues) {
    //   setValue(key, '')
    // }
    // setTitle('')
    // setDescription('')
    setManager({})
    setTeam([])
  }

  const handleChangeComplete = (color, event) => {
    setColor(color.hex)
    setShowPicker(false)
  }

  const onSelectTemplate = (item) => {
    setTemplate({...template, label: item.title});
    populateProjectForm(item);
  }
  
  return (
    <Sidebar
      size='lg'
      open={open}
      title={fromWhere == 'template' ? 'New Template' : 'New Project'}
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
      onClosed={handleSidebarClosed}
    >
      <Form onSubmit={(e) => onSubmit(e)}>
        {fromWhere != 'template' ?
          <div className='mb-1'>
            <div className='form-check form-check-inline pb-50'>
              <Input type='checkbox' id='saveAsTemplate' value={template.is_template} onChange={e => {
                setTemplate({...template, is_template: e.target.checked, label: ''})
              }} />
              <Label for='saveAsTemplate' className='form-check-label'>
                Use Template
              </Label>
            </div>
            {template.is_template ?
              <Select
                id='name'
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={templates?.map((item)=> {return {label: item.title, ...item}})}
                value={template}
                onChange={(item) => {onSelectTemplate(item)}}
                theme={selectThemeColors}
              />
              : null
            }
          </div>
          : null
        }
        <div className='mb-1'>
          <Label className='form-label' for='title'>
            {fromWhere == 'template' ? 'Template Name' : 'Project Name' }<span className='text-danger'>*</span>
          </Label>
          <Input name='title' id='title' placeholder='' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='description'>
            Description <span className='text-danger'>*</span>
          </Label>
            <Input value={description} name='description' id='description' type='textarea' rows='3' placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
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
            onChange={(date) => {
              setStartDate(date[0])
            }}
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
            <Label className='form-label' for='user-role'>
            Select Team
            </Label>
            <div className='mb-1'>
            <Select
                isMulti
                id='users'
                name='users'
                isClearable={false}
                theme={selectThemeColors}
                options={selectOptions}
                value={team}
                onChange={(item) => setTeam(item)}
                className='react-select'
                classNamePrefix='select'
                components={{ Option: SelectComponent }}
            />
            </div>
            
            {/* <Input type='select' id='user-role' name='user-role' value={role} onChange={e => setRole(e.target.value)}>
            <option value='subscriber'>Waqar Ahmed</option>
            <option value='editor'>Wasim Pasha</option>
            <option value='editor'>Rizwan Ahmed</option>
            </Input> */}
        </div>
        {/* <div className='mb-1'>
            <Label className='form-label' for='user-role'>
            Category
            </Label>
            <Input type='select' id='user-role' name='user-role' value={role} onChange={e => setRole(e.target.value)}>
            <option value='subscriber'>Category 1</option>
            <option value='editor'>Category 2</option>
            </Input>
        </div> */}
        <div className='mb-1'>
            <Label className='form-label' for='manager_id'>
            Manager <span className='text-danger'>*</span>
            </Label>
            {/* <Input type='select' id='manager_id' name='manager_id' value={manager} onChange={e => setManager(e.target.value)}>
            <option value=''>Select</option>  
            { users.map((item) => {
                return (<option key={item.id} value={item.id}>{`${item.first_name  } ${  item.last_name}`}</option>)
                })
            }
            </Input> */}
            <Select
            id='manager_id'
            isClearable={false}
            className='react-select'
            classNamePrefix='select'
            options={selectOptions}
            value={manager}
            onChange={(item) => {
              // console.log(item)
              setManager(item)
            }}
            theme={selectThemeColors}
            />
        </div>
        <div className='mb-1'>
            <Label className='form-label' for='color'>
            Color <span className='text-danger'>*</span>
            </Label>
            <Input name='color' id='color' value={color} onClick={() => setShowPicker(!showPicker)} placeholder='Click to chose color!' />
            {showPicker ? <TwitterPicker onChange={ handleChangeComplete } /> : null}
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

export default SidebarNewUsers
