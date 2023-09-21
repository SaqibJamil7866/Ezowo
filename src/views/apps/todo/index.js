// ** React Imports
import { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'

// ** Todo App Components
import Tasks from './Tasks'
import Sidebar from './Sidebar'
import TaskSidebar from './TaskSidebar'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getTasks, updateTask, selectTask, addTask, deleteTask, reOrderTasks } from './store'

// ** Styles
import '@styles/react/apps/app-todo.scss'

import { getAllProjects } from "../../../services/Apis"

const TODO = () => {

  const [projectsData, setProjectsData] = useState([])

  const fetchProjects = () => {
    const params = {
      direction: 'desc',
      sort: 'id',
      // limit: 100,
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
          const pData = result.data.map((item) => {
            return { ...item, value: item.id, label: item.title }
          })
          pData.unshift({
            id: 0,
            title: "ALL",
            value: 0,
            label: "ALL"
        })
          console.log(pData)
          setProjectsData(pData)
        }
      })
    } catch (error) {
      console.error('ERROR')
    }
  }

  // ** States
  const [sort, setSort] = useState('')
  const [query, setQuery] = useState('')
  const [mainSidebar, setMainSidebar] = useState(false)
  const [openTaskSidebar, setOpenTaskSidebar] = useState(false)

  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.todo)

  // console.info(' INDEX ', store.params)

  // ** URL Params
  const paramsURL = useParams()
  const params = {
    filter: paramsURL.filter || '',
    q: query || '',
    sortBy: sort || '',
    tag: paramsURL.tag || ''
  }
  params['project_id'] = store.params && store.params.project_id ? store.params.project_id : ''

  // ** Function to handle Left sidebar & Task sidebar
  const handleMainSidebar = () => setMainSidebar(!mainSidebar)
  const handleTaskSidebar = () => setOpenTaskSidebar(!openTaskSidebar)

  // ** Get Tasks on mount & based on dependency change
  // useEffect(() => {
  //   if (store.params && store.params.project_id) {
  //     dispatch(
  //       getTasks({
  //         filter: paramsURL.filter || '',
  //         q: query || '',
  //         sortBy: sort || '',
  //         project_id: store.params.project_id,
  //         tag: paramsURL.tag || ''
  //       })
  //     )
  //   }
  // }, [store.tasks.length, paramsURL.filter, paramsURL.tag, paramsURL.project, query, sort])

  useEffect(() => { 
    fetchProjects()
  }, [])

  useEffect(() => {
      dispatch(
        getTasks({
          filter: paramsURL.filter || '',
          q: query || '',
          sortBy: sort || '',
          tag: paramsURL.tag || '',
          project_id: store.params.project_id || ''
        })
      )
  }, [])

  return (
    <Fragment>
      <Sidebar
        projects={projectsData}
        store={store}
        params={params}
        dispatch={dispatch}
        mainSidebar={mainSidebar}
        urlFilter={paramsURL.filter}
        setMainSidebar={setMainSidebar}
        handleTaskSidebar={handleTaskSidebar}
      />
      <div className='content-right'>
        <div className='content-wrapper'>
          <div className='content-body'>
            <div
              className={classnames('body-content-overlay', {
                show: mainSidebar === true
              })}
              onClick={handleMainSidebar}
            ></div>

            {store ? (
              <Tasks
                store={store}
                tasks={store.tasks}
                sort={sort}
                query={query}
                params={params}
                setSort={setSort}
                setQuery={setQuery}
                dispatch={dispatch}
                // getTasks={getTasks}
                paramsURL={paramsURL}
                updateTask={updateTask}
                selectTask={selectTask}
                reOrderTasks={reOrderTasks}
                handleMainSidebar={handleMainSidebar}
                handleTaskSidebar={handleTaskSidebar}
              />
            ) : null}

            <TaskSidebar
              projects={projectsData.filter(item => item.id !== 0)}
              store={store}
              params={params}
              addTask={addTask}
              dispatch={dispatch}
              open={openTaskSidebar}
              updateTask={updateTask}
              selectTask={selectTask}
              deleteTask={deleteTask}
              handleTaskSidebar={handleTaskSidebar}
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default TODO
