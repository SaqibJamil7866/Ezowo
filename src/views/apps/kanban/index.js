import { lazy, useEffect, useState } from 'react'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import KanbanBoards from './KanbanBoards'
import '@styles/react/apps/app-kanban.scss'
import { Row, Col, Card, Label, CardBody, CardTitle, CardHeader } from 'reactstrap'
import { getAllTaskStatus, getAllProjectTasks, getAllProjects } from "../../../services/Apis"
const ProjectTasks = lazy(() => import('../project/view/ProjectTasks'))


const KanbanBoard = () => {

  const viewOptions = [
    {label: 'Kanban', value: 'kanban'},
    {label: 'Table', value: 'table'}
  ]

  const [boards, setBoards] = useState([])
  const [tasks, setTasks] = useState([])
  const [projects, setProjects] = useState([])
  const [selectedView, setSelectedView] = useState(viewOptions[0])
  const [currentProject, setCurrentProject] = useState({});

  
  const getBoards = () => {
      getAllTaskStatus().then((res) => {
        const result = res.response
        if (
          result &&
          (result.code === 200 || result.code === 400) &&
          result.data
        ) {
          const boardData = result.data.map((item) => {
            return { ...item, id: item.value, realId: item.id }
          })
          setBoards(boardData)
        }
      })
  }

  const getTasks = (data) => {
    const params = {
      project_id: data?.id
    }
    getAllProjectTasks(params).then((res) => {
      const result = res.response
      if (
        result &&
        (result.code === 200 || result.code === 400) &&
        result.data
      ) {
        const taskData = result.data.map((item) => {
          return { ...item, boardId: item.status.value || '' }
        })
        setTasks(taskData)
      }
    })
  }

  const fetchProjects = () => {
    const params = {
      direction: 'desc',
      sort: 'id',
      active: 1
    }
    getAllProjects(params).then((res) => {
      const result = res.response
      if (
        result &&
        (result.code === 200 || result.code === 400) &&
        result.data
      ) {
        const pData = result.data.map((item) => {
            return { ...item, value: item.id, label: item.title }
          })
        setProjects(pData)
        setCurrentProject(pData[0])
        getTasks(pData[0])
      }
    })
  }

  const updateTasks = (updateTaskItem) => {
    setTasks((old) => {
      return old.map((taskItem) => {
        if (taskItem.id === updateTaskItem.id) {
          taskItem.boardId = updateTaskItem.boardId
        }
        return taskItem
      })
    })
  }

  useEffect(() => {
    fetchProjects()
    getBoards()
}, [])

  // ** Hooks
  const renderBoards = () => {
    return boards.map((board, index) => {
      const isLastBoard = boards[boards.length - 1].id === board.id

      return (
        <KanbanBoards
          project={currentProject}
          boardsData={boards}
          board={board}
          onBoardUpdate={updateTasks}
          tasks={tasks}
          // labelColors={labelColors}
          isLastBoard={isLastBoard}
          key={`${board.id}-${index}`}
          index={`${board.id}-${index}`}
        />
      )
    })
  }

  const renderTable = () => {
    return (
      <div>
        <ProjectTasks project={currentProject}/>
      </div>
    )
  }

  return boards.length ? (
    <>
      <Card>
        <CardBody>
          <Row>
            <Col md='3' xxl='3'>
              <Label for='status-select'>Select Project</Label>
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={projects}
                value={currentProject}
                onChange={data => {
                    setCurrentProject(data)
                    getTasks(data)
                }}
              />
            </Col>
            <Col md='3' xxl='3'>
              <Label for='status-select'>Select View</Label>
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={viewOptions}
                value={selectedView}
                onChange={data => {
                  setSelectedView(data)
                }}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>

      <>
        {(tasks && tasks.length) ? <div className='app-kanban-wrapper'>
          {selectedView?.value == 'kanban' ?
           renderBoards()
          : renderTable()}
        </div> : 'No Tasks found.' }
      </>
    </>
  ) : null
}

export default KanbanBoard
