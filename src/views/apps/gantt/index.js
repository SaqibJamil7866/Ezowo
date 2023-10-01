import { useState, useEffect } from 'react'
import { Row, Col, Card, Label, CardBody, CardTitle, CardHeader, Input } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react'
import "gantt-task-react/dist/index.css"

import { getAllProjects, getAllProjectTasks } from "../../../services/Apis"

const GanttComponent = () => {
    const viewArray = [
        {label: ViewMode.Day, value: ViewMode.Day},
        {label: ViewMode.Week, value: ViewMode.Week},
        {label: ViewMode.Month, value: ViewMode.Month},
        {label: ViewMode.Year, value: ViewMode.Year}
    ]
    const [currentView, setCurrentView] = useState({label: ViewMode.Day, value: ViewMode.Day})
    const [view, setView] = useState(ViewMode.Day)
    
    const [isChecked, setIsChecked] = useState(true)
    
    const [tasks, setTasks] = useState([])
    const [projects, setProjects] = useState([])
    const [currentProject, setCurrentProject] = useState({})

    let columnWidth = 65
    if (view === ViewMode.Year) {
        columnWidth = 350
    } else if (view === ViewMode.Month) {
        columnWidth = 300
    } else if (view === ViewMode.Week) {
        columnWidth = 250
    }
    
    const handleExpanderClick = (task) => {
      setTasks(tasks.map(t => (t.id === task.id ? task : t)))
      console.log(`On expander click Id:${  task.id}`)
    }

    const getStartEndDateForProject = (tasks, projectId) => {
      const projectTasks = tasks.filter((t) => t.project === projectId);
      let start = projectTasks[0].start;
      let end = projectTasks[0].end;
      for (let i = 0; i < projectTasks.length; i++) {
        const task = projectTasks[i];
        if (start.getTime() > task.start.getTime()) {
          start = task.start;
        }
        if (end.getTime() < task.end.getTime()) {
          end = task.end;
        }
      }
      return [start, end];
    }

    const handleTaskChange = (task) => {
      console.log("On date change Id:" + task);
      let newTasks = tasks.map((t) => (t.id === task.id ? task : t));
      if (task.project) {
        const [start, end] = getStartEndDateForProject(newTasks, task.project);
        const project =
          newTasks[newTasks.findIndex((t) => t.id === task.project)];
        if (
          project.start.getTime() !== start.getTime() ||
          project.end.getTime() !== end.getTime()
        ) {
          const changedProject = { ...project, start, end };
          newTasks = newTasks.map((t) =>
            t.id === task.project ? changedProject : t
          );
        }
      }
      setTasks(newTasks);
    };


    const fetchProjectTasks = (obj) => {
        const params = {
          direction: 'desc',
          sort: 'id',
          project_id: obj.id
        }
        getAllProjectTasks(params).then((res) => {
          const result = res.response
          if (
            result &&
            (result.code === 200 || result.code === 400) &&
            result.data
          ) {
            const data = result.data.map((item, index) => {
                return { 
                    ...item, 
                    start: new Date(item.start_date), 
                    end: new Date(item.end_date),
                    name: item.title,
                    id: `${item.title  } ${  item.id}`,
                    progress: 25,
                    type: 'task',
                    project: `Project-${  obj.title  }-${  obj.id}`,
                    displayOrder: parseInt(index + 2),
                    dependencies: item.id == '29' ? ['Testing Full Task 28'] : [],
                }
            })
            
            data.unshift({
                start: new Date(obj.start_date),
                end: new Date(obj.end_date),
                name: obj.title,
                id: `Project-${  obj.title  }-${  obj.id}`,
                progress: 60,
                type: "project",
                hideChildren: false,
                displayOrder: 1,
             })
            
            setTasks(data)
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
            fetchProjectTasks(pData[0])
          }
        })
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    return (
        <>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Gantt</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='2' xxl='2'>
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
                    fetchProjectTasks(data)
                }}
              />
            </Col>
            <Col md='2' xxl='2'>
              <Label for='status-select'>Select View</Label>
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={viewArray}
                value={currentView}
                onChange={data => {
                    setCurrentView(data)
                    setView(data.value)
                }}
              />
            </Col>
            <Col md='1' xxl='2'>
              <div className='form-check mt30'>
                <Input id='show_task_list' type='checkbox' defaultChecked={isChecked} onChange={()=>{setIsChecked(!isChecked)}} />
                <Label className='form-check-label' for='show_task_list'>
                  Show Task List
                </Label>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card className='overflow-hidden'>
        <div className='react-dataTable'>
            {tasks && tasks.length ? <Gantt 
            tasks={tasks} 
            viewMode={view}
            listCellWidth={isChecked ? "155px" : ""}
            columnWidth={columnWidth}
            onDateChange={handleTaskChange}
            onExpanderClick={handleExpanderClick}
            /> : null}
        </div>
      </Card>
    </>
    )
}

export default GanttComponent