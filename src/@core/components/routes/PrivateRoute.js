// ** React Imports
import { Navigate } from 'react-router-dom'
import { Suspense } from 'react'

// ** Context Imports
// import { AbilityContext } from '@src/utility/context/Can'

const PrivateRoute = ({ children, route }) => {
  // ** Hooks & Vars
  // const ability = useContext(AbilityContext)
  const user = JSON.parse(localStorage.getItem('userData'))
  const isToken = localStorage.getItem('token')

  if (route) {
    // let action = null
    // let resource = null
    let restrictedRoute = false

    if (route.meta) {
      // action = route.meta.action
      // resource = route.meta.resource
      restrictedRoute = route.meta.restricted
    }
    if (!user) {
      return <Navigate to={`${process.env.PUBLIC_URL}/app/login`} />
    }
    if (user && restrictedRoute) {
      return <Navigate to={`${process.env.PUBLIC_URL}/app`} />
    }
    if (user && restrictedRoute && user.role === 'client') {
      return <Navigate to={`${process.env.PUBLIC_URL}/app/access-control`} />
    }
    if (user && !isToken) {
      return <Navigate to='/misc/not-authorized' replace />
    }
  }

  return <Suspense fallback={null}>{children}</Suspense>
}

export default PrivateRoute
