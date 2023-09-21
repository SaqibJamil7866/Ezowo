import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { selectThemeColors } from '@utils'
import Select from 'react-select'
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Mail, Star, Check, Trash, Plus } from 'react-feather'
import { getTasks } from './store'

// ** Reactstrap Imports
import { Button, ListGroup, ListGroupItem, Label } from 'reactstrap'

const TodoSidebar = props => {

  const { projects, handleTaskSidebar, setMainSidebar, mainSidebar, dispatch, params } = props
  const [selectedProject, setSelectedProject] = useState()

  useEffect(() => {
    // if (projects && selectedProject && selectedProject.id) {
      // const found = projects.filter(item => item.id === selectedProject.id)
      // if (found && found[0]) {
      //   setSelectedProject(found[0])
        // console.log('selectedProject ', selectedProject)
    //     console.log('MASHA')
    //     dispatch(getTasks({ ...params, project_id : selectedProject && selectedProject.id ? selectedProject.id : '' }))
    //   // }
    // } else {
      setSelectedProject({
        id: 0,
        title: "ALL",
        value: 0,
        label: "ALL"
    })
    // }
  }, [])

  const handleProjectSelection = (item) => {
    setSelectedProject(item)
    dispatch(getTasks({ ...params, project_id : item && item.id ? item.id : '' }))
  }
  

  // ** Functions To Handle List Item Filter
  const handleFilter = filter => {
    // console.log(' Params ', params)
    // console.log(' Filter ', filter)
    // console.log(selectedProject)
    dispatch(getTasks({ ...params, filter, project_id: selectedProject && selectedProject ? selectedProject.id : '' }))
  }

  const handleTag = tag => {
    console.log('MAI V')
    dispatch(getTasks({ ...params, tag, project_id: selectedProject && selectedProject ? selectedProject.id : '' }))
  }

  // ** Functions To Active List Item
  const handleActiveItem = value => {
    if ((params.filter && params.filter === value) || (params.tag && params.tag === value)) {
      return true
    } else {
      return false
    }
  }

  // ** Functions To Handle Add Task Click
  const handleAddClick = () => {
    handleTaskSidebar()
    setMainSidebar()
  }

  // const openProject = (item) => {
  //   // setSelectedProject(item)
  //   // history.push("/login")
  // }

  return (
    <div
      className={classnames('sidebar-left', {
        show: mainSidebar === true
      })}
    >
      <div className='sidebar'>
        <div className='sidebar-content todo-sidebar'>
          <div className='todo-app-menu'>
            <div className='add-task'>
              <Button color='primary' onClick={handleAddClick} block>
                Add Note
              </Button>
            </div>
            <div className='add-task' style={{paddingTop: '0px'}}>
              <Label className='form-label' for='projects'>
                Select Project
              </Label>
              <Select
                  id='projects'
                  name='projects'
                  isClearable={false}
                  theme={selectThemeColors}
                  options={projects}
                  value={selectedProject}
                  onChange={(item) => {
                    handleProjectSelection(item)
                  }}
                  style={{width: '84% !important', margin: 'auto'}}
                  className='react-select'
                  classNamePrefix='select'
              />
            </div>
            {selectedProject && selectedProject.id ? (<PerfectScrollbar className='sidebar-menu-list' options={{ wheelPropagation: false }}>
              <ListGroup tag='div' className='list-group-filters'>
                <ListGroupItem
                  // action
                  // tag={Link}
                  // to={`/app/apps/todo/${selectedProject?.id}`}
                  active={params.filter === '' && params.tag === ''}
                  onClick={() => handleFilter('')}
                >
                  <Mail className='me-75' size={18} />
                  <span className='align-middle'>All</span>
                </ListGroupItem>
                <ListGroupItem
                  // tag={Link}
                  // to={`/app/apps/todo/important/${selectedProject?.id}`}
                  active={handleActiveItem('important')}
                  onClick={() => handleFilter('important')}
                  // action
                >
                  <Star className='me-75' size={18} />
                  <span className='align-middle'>Important</span>
                </ListGroupItem>
                <ListGroupItem
                  // tag={Link}
                  // to={`/app/apps/todo/completed/${selectedProject?.id}`}
                  active={handleActiveItem('completed')}
                  onClick={() => handleFilter('completed')}
                  // action
                >
                  <Check className='me-75' size={18} />
                  <span className='align-middle'>Completed</span>
                </ListGroupItem>
                <ListGroupItem
                  // tag={Link}
                  // to={`/app/apps/todo/deleted/${selectedProject?.id}`}
                  active={handleActiveItem('deleted')}
                  onClick={() => handleFilter('deleted')}
                  // action
                >
                  <Trash className='me-75' size={18} />
                  <span className='align-middle'>Deleted</span>
                </ListGroupItem>
              </ListGroup>
              {/* <div className='mt-3 px-2 d-flex justify-content-between'>
                <h6 className='section-label mb-1'>Tags</h6> */}
                {/* <Plus className='cursor-pointer' size={14} /> */}
              {/* </div> */}
            </PerfectScrollbar>) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoSidebar
