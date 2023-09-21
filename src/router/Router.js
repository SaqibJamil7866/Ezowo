// ** Router imports
import { lazy } from 'react'

// ** Router imports
import { useRoutes, Navigate } from 'react-router-dom'

// ** Layouts
import BlankLayout from '@layouts/BlankLayout'

// ** Hooks Imports
import { useLayout } from '@hooks/useLayout'

// ** Utils
import { getUserData, getHomeRouteForLoggedInUser } from '../utility/Utils'

// ** GetRoutes
import { getRoutes } from './routes'

// ** Components
const Error = lazy(() => import('../views/pages/misc/Error'))
const Login = lazy(() => import('../views/pages/authentication/Login'))
const NotAuthorized = lazy(() => import('../views/pages/misc/NotAuthorized'))

const Router = () => {
  // ** Hooks
  const { layout } = useLayout()

  const allRoutes = getRoutes(layout)
  // console.log(' ROUTES ', allRoutes)
  const getHomeRoute = () => {
    const user = getUserData()
    if (user) {
      return getHomeRouteForLoggedInUser(user.role)
    } else {
      return `${process.env.PUBLIC_URL}/login`
    }
  }
  
  const routes = useRoutes([
    {
      // path: '/app/',
      path: `${process.env.PUBLIC_URL}/`,
      index: true,
      element: <Navigate replace to={getHomeRoute()} />
    },
    {
      path: `${process.env.PUBLIC_URL}/login`,
      element: <BlankLayout />,
      children: [{ path: `${process.env.PUBLIC_URL}/login`, element: <Login /> }]
    },
    {
      path: `${process.env.PUBLIC_URL}/auth/not-auth`,
      element: <BlankLayout />,
      children: [{ path: `${process.env.PUBLIC_URL}/auth/not-auth`, element: <NotAuthorized /> }]
    },
    {
      path: '*',
      element: <BlankLayout />,
      children: [{ path: '*', element: <Error /> }]
    },
    ...allRoutes
  ])

  return routes
}

export default Router
