// ** React Imports
import { useState, useEffect, Fragment } from 'react'
import toast from 'react-hot-toast'
import { Input, Button, FormText, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown } from 'reactstrap'

// ** Third Party Imports
import { ReactSortable } from 'react-sortablejs'
import { useForm, Controller } from 'react-hook-form'
import { Plus, MoreVertical } from 'react-feather'

import KanbanTasks from './KanbanTasks'
import { addTask } from "../../../services/Apis"

const defaultValues = {
  taskTitle: ''
}

const KanbanBoard = props => {

  const { onBoardUpdate, project, boardsData, board, index, tasks } = props
  const [title, setTitle] = useState('')

  useEffect(() => {
    setTitle(board.title)
  }, [board.title])

  // const sortTaskOnSameBoard = ev => {
  //   if (ev.from.classList[1] === ev.to.classList[1]) {
  //     dispatch(
  //       reorderTasks({
  //         taskId: ev.item.dataset.taskId,
  //         targetTaskId: ev.originalEvent.target.dataset.taskId
  //       })
  //     )
  //   }
  // }

  const MoveTaskToAnotherBoard = ev => {
    const newBoardId = ev.to.classList[1].replace('board-', '')
    const postData = { project_id: project.id, id: ev.item.dataset.taskId }
    postData['status_id'] = boardsData.find(b => b.value === newBoardId).realId
    addTask(postData)
    .then(res => {
      if (res.response.code === 200) {
        const task = tasks.find(i => i.id === Number(postData.id))
        task.boardId = newBoardId
        onBoardUpdate(task)
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

  return (
    <Fragment key={index}>
      <div className='board-wrapper'>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center board-header'>
            <Input className='board-title' value={title} />
          </div>
        </div>
        <div>
          <ReactSortable
            list={tasks}
            group='shared-group'
            setList={() => null}
            // onChange={sortTaskOnSameBoard}
            onAdd={MoveTaskToAnotherBoard}
            className={`tasks-wrapper board-${board.id}`}
            style={{backgroundColor: '#ededed', padding: '1px 10px', borderRadius: '10px'}}
          >
            {tasks.map((task, index) => {
              if (task.boardId === board.id) {
                return (
                  <KanbanTasks
                    task={task}
                    index={index}
                    // labelColors={labelColors}
                    key={`${task.boardId}-${index}`}
                  />
                )
              } else {
                return <Fragment key={`${task.boardId}-${index}`}></Fragment>
              }
            })}
          </ReactSortable>
        </div>
      </div>
    </Fragment>
  )
}

export default KanbanBoard
