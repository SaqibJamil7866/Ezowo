import { lazy } from 'react'

const DashboardAnalytics = lazy(() => import('../../views/dashboard/analytics'))
const DashboardEcommerce = lazy(() => import('../../views/dashboard/ecommerce'))

const DashboardRoutes = [
  {
    path: `${process.env.PUBLIC_URL}/dashboard`,
    element: <DashboardAnalytics />
  },
  {
    path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`,
    element: <DashboardEcommerce />
  }
]

export default DashboardRoutes
