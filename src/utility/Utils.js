import { DefaultRoute } from '../router/routes'
import moment from 'moment'
export const isObjEmpty = obj => Object.keys(obj).length === 0
export const kFormatter = num => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num)

// ** Converts HTML to string
export const htmlToString = html => html.replace(/<\/?[^>]+(>|$)/g, '')

// ** Checks if the passed date is today
const isToday = date => {
  const today = new Date()
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
    /* eslint-enable */
  )
}

/**
 ** Format and return date in Humanize format
 ** Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 ** Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */
export const formatDate = (value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
  if (!value) return value
  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}

// ** Returns short month of passed date
export const formatDateToMonthShort = (value, toTimeForCurrentDay = true) => {
  const date = new Date(value)
  let formatting = { month: 'short', day: 'numeric' }

  if (toTimeForCurrentDay && isToday(date)) {
    formatting = { hour: 'numeric', minute: 'numeric' }
  }

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}

/**
 ** Return if user is logged in
 ** This is completely up to you and how you want to store the token in your frontend application
 *  ? e.g. If you are using cookies to store the application please update this function
 */
export const isUserLoggedIn = () => localStorage.getItem('userData')
export const getUserData = () => JSON.parse(localStorage.getItem('userData'))
export const getCurrentUserRole = () => JSON.parse(localStorage.getItem("userData")).role
/**
 ** This function is used for demo purpose route navigation
 ** In real app you won't need this function because your app will navigate to same route for each users regardless of ability
 ** Please note role field is just for showing purpose it's not used by anything in frontend
 ** We are checking role just for ease
 * ? NOTE: If you have different pages to navigate based on user ability then this function can be useful. However, you need to update it.
 * @param {String} userRole Role of user
 */
export const getHomeRouteForLoggedInUser = userRole => {
  return DefaultRoute
  // if (userRole) return DefaultRoute
  // return `${process.env.PUBLIC_URL}/login`
  // if (userRole === 'client') return `${process.env.PUBLIC_URL}/access-control`
}

// ** React Select Theme Colors
export const selectThemeColors = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#7367f01a', // for option hover bg-color
    primary: '#7367f0', // for selected option bg-color
    neutral10: '#7367f0', // for tags bg-color
    neutral20: '#ededed', // for input border-color
    neutral30: '#ededed' // for input hover border-color
  }
})

export const getRoleOptions = (roles) => {
  const roleOptions = roles.map((item) => {
    return { ...item, value: item.id, label: item.title }
  })
  return roleOptions
}

export const taskStatusMeta = {
  todo: 'light-secondary',
  in_development: 'light-info',
  branch_testing: 'light-warning',
  staging_deployed: 'light-success',
  production_deployed: 'light-secondary',
  done: 'light-success'
}

export const taskPriorityMeta = {
  low: 'light-primary',
  medium: 'light-warning',
  high: 'light-danger'
}

export const calculateTaskPercentage = (todoTasks, completedTasks) => {
  if (todoTasks === 0 && (completedTasks === 0 || completedTasks > 0)) {
    return 100
  } else if (todoTasks > 0) {
    return (completedTasks / todoTasks) * 100
  }
}

export const getRoleBasedPermissions = () => {
  const role = JSON.parse(localStorage.getItem("userData")).role
  const permissions = {
    user: {create: false, edit: false, delete: false},
    project: {create: false, edit: false, delete: false},
    task: {create: false, edit: false, delete: false},
    gantt: {view: false},
    report: {view: false}
  }
  if (!role) {
    return permissions
  }
  return {
    user: {
      create: !!(role === 'owner' || role === 'admin' || role === 'demo' || role === 'manager'), //manager can only create user of type: USER
      edit: !!(role === 'owner' || role === 'admin' || role === 'demo' || role === 'manager'), //manager can only edit user of type: USER
      delete: !!(role === 'owner' || role === 'admin' || role === 'demo') //manager can only delete user of type: USER
    },
    project: {
      create: !!(role === 'owner' || role === 'admin' || role === 'demo'),
      edit: !!(role === 'owner' || role === 'admin' || role === 'demo'),
      delete: !!(role === 'owner' || role === 'admin' || role === 'demo')
    },
    task: {
      create: !!(role === 'owner' || role === 'admin' || role === 'demo' || role === 'manager' || role === 'user'),
      edit: !!(role === 'owner' || role === 'admin' || role === 'demo' || role === 'manager' || role === 'user'),
      delete: !!(role === 'owner' || role === 'admin' || role === 'demo')
    },
    gantt: {
      create: !!(role === 'owner' || role === 'admin' || role === 'demo' || role === 'manager' || role === 'user')
    },
    report: {
      view: !!(role === 'owner' || role === 'admin' || role === 'demo')
    }
  }
}

export const getFormattedDate = (date, givenFormat, time) => {
  let format = "DD MMM, YY"
  if (time) {
    format += ", h:mm:ss a"
  }
  return moment(date).format(givenFormat ? givenFormat : format)
}