// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

const baseApi = 'https://ezowo.com/api/'
const token = localStorage.token

export const getTasks = createAsyncThunk('appTodo/getTasks', async params => {
  const response = await axios.get(`${baseApi}notes?token=${  token  }`, { params })
  
  const data = {
    tasks: response.data.response.data
  }
  
  // eslint-disable-next-line object-curly-newline
  const { q = '', filter, tag, sortBy: sortByParam = 'latest' } = params
  /* eslint-enable */
  // ------------------------------------------------
  // Get Sort by and Sort Direction
  // ------------------------------------------------
  let sortDesc = true

  const sortBy = (() => {
    if (sortByParam === 'title-asc') {
      sortDesc = false
      return 'title'
    }
    if (sortByParam === 'title-desc') return 'title'
    if (sortByParam === 'assignee') {
      sortDesc = false
      return 'assignee'
    }
    if (sortByParam === 'due-date') {
      sortDesc = false
      return 'dueDate'
    }
    return 'id'
  })()

  // ------------------------------------------------
  // Filtering
  // ------------------------------------------------
  const queryLowered = q.toLowerCase()

  const hasFilter = task => {
    if (filter === 'important') return task.is_important && !task.is_deleted
    if (filter === 'completed') return task.is_completed && !task.is_deleted
    if (filter === 'deleted') return task.is_deleted
    return !task.is_deleted
  }

  const includesFilter = task => task.tags.includes(queryLowered) || task.tags.some(tag => tag.includes(queryLowered))

  const includesDueDate = task => {
    const date = new Date(task.dueDate).getDate().toString().padStart(2, '0')
    const month = new Date(task.dueDate).toLocaleString('default', { month: 'short' }).toLowerCase()
    const dateMonth = `${date} ${month}`
    const monthDate = `${month} ${date}`

    return (
      date.includes(queryLowered) ||
      month.includes(queryLowered) ||
      dateMonth.includes(queryLowered) ||
      monthDate.includes(queryLowered)
    )
  }

  /* eslint-disable */
  const filteredData = data.tasks.filter(task => {
    if (filter || tag) {
      return (
        task.title.toLowerCase().includes(queryLowered) && hasFilter(task) && (tag ? task.tags.includes(tag) : true)
      )
    } else {
      return task.title.toLowerCase().includes(queryLowered) || includesFilter(task) || includesDueDate(task)
    }
  })
  /* eslint-enable  */

  // ------------------------------------------------
  // Perform sorting
  // ------------------------------------------------
  const sortTasks = key => (a, b) => {
    let fieldA
    let fieldB

    // If sorting is by dueDate => Convert data to date
    if (key === 'dueDate') {
      fieldA = new Date(a[key])
      fieldB = new Date(b[key])
      // eslint-disable-next-line brace-style
    }

    // If sorting is by assignee => Use `fullName` of assignee
    else if (key === 'assignee') {
      fieldA = a.assignee ? a.assignee.fullName : null
      fieldB = b.assignee ? b.assignee.fullName : null
    } else {
      fieldA = a[key]
      fieldB = b[key]
    }

    let comparison = 0

    if (fieldA === fieldB) {
      comparison = 0
    } else if (fieldA === null) {
      comparison = 1
    } else if (fieldB === null) {
      comparison = -1
    } else if (fieldA > fieldB) {
      comparison = 1
    } else if (fieldA < fieldB) {
      comparison = -1
    }

    return comparison
  }

  // Sort Data
  const sortedData = filteredData.sort(sortTasks(sortBy))
  if (sortDesc) sortedData.reverse()

  return {
    params,
    data: sortedData
  }
})

export const addTask = createAsyncThunk('appTodo/addTask', async (task, { dispatch, getState }) => {
  const response = await axios.post(`${baseApi }/notes/add?token=${token}`, task)
  await dispatch(getTasks(getState().todo.params))
  return response.data
})

export const updateTask = createAsyncThunk('appTodo/updateTask', async (task, { dispatch, getState }) => {
  const response = await axios.post(`${baseApi  }/notes/add?token=${token}`, task)
  console.error(' UPDATE resposne ', response)
  await dispatch(getTasks(getState().todo.params))
  return response.data
})

export const deleteTask = createAsyncThunk('appTodo/deleteTask', async (taskId, { dispatch, getState }) => {
  // const response = await axios.delete('/apps/todo/delete-task', { taskId })
  const response = await axios.post(`${baseApi  }/notes/delete?token=${token}`, {id: taskId})
  await dispatch(getTasks(getState().todo.params))
  return response.data
})

export const appTodoSlice = createSlice({
  name: 'appTodo',
  initialState: {
    tasks: [],
    selectedTask: {},
    params: {
      filter: '',
      q: '',
      sort: '',
      tag: ''
    }
  },
  reducers: {
    reOrderTasks: (state, action) => {
      state.tasks = action.payload
    },
    selectTask: (state, action) => {
      state.selectedTask = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.tasks = action.payload.data
      state.params = action.payload.params
    })
  }
})

export const { reOrderTasks, selectTask } = appTodoSlice.actions

export default appTodoSlice.reducer
