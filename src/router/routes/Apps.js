// ** React Imports
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import TaskDetail from '../../views/apps/project/view/TaskDetail'

const StickyNote = lazy(() => import('../../views/apps/sticky-notes'))
const Chat = lazy(() => import('../../views/apps/chat'))
const Todo = lazy(() => import('../../views/apps/todo'))
const Email = lazy(() => import('../../views/apps/email'))
const Kanban = lazy(() => import('../../views/apps/kanban'))
const Calendar = lazy(() => import('../../views/apps/calendar'))
const GanttComponent = lazy(() => import('../../views/apps/gantt/index'))

const InvoiceAdd = lazy(() => import('../../views/apps/invoice/add'))
const InvoiceList = lazy(() => import('../../views/apps/invoice/list'))
const InvoiceEdit = lazy(() => import('../../views/apps/invoice/edit'))
const InvoicePrint = lazy(() => import('../../views/apps/invoice/print'))
const InvoicePreview = lazy(() => import('../../views/apps/invoice/preview'))

const EcommerceShop = lazy(() => import('../../views/apps/ecommerce/shop'))
const EcommerceDetail = lazy(() => import('../../views/apps/ecommerce/detail'))
const EcommerceWishlist = lazy(() => import('../../views/apps/ecommerce/wishlist'))
const EcommerceCheckout = lazy(() => import('../../views/apps/ecommerce/checkout'))


const ProjectList = lazy(() => import('../../views/apps/project/list'))
const ProjectView = lazy(() => import('../../views/apps/project/view'))

const UserList = lazy(() => import('../../views/apps/user/list'))
const UserView = lazy(() => import('../../views/apps/user/view'))

const Roles = lazy(() => import('../../views/apps/roles-permissions/roles'))
const Permissions = lazy(() => import('../../views/apps/roles-permissions/permissions'))

const AppRoutes = [
  {
    element: <Email />,
    path: `${process.env.PUBLIC_URL}/apps/email`,
    meta: {
      appLayout: true,
      className: 'email-application'
    }
  },
  {
    element: <Email />,
    path: `${process.env.PUBLIC_URL}/apps/email/:folder`,
    meta: {
      appLayout: true,
      className: 'email-application'
    }
  },
  {
    element: <Email />,
    path: `${process.env.PUBLIC_URL}/apps/email/label/:label`,
    meta: {
      appLayout: true,
      className: 'email-application'
    }
  },
  {
    element: <Email />,
    path: `${process.env.PUBLIC_URL}/apps/email/:filter`
  },
  {
    path: `${process.env.PUBLIC_URL}/apps/chat`,
    element: <Chat />,
    meta: {
      appLayout: true,
      className: 'chat-application'
    }
  },
  {
    element: <Todo />,
    path: `${process.env.PUBLIC_URL}/apps/todo`,
    meta: {
      appLayout: true,
      className: 'todo-application'
    }
  },
  // {
  //   element: <Todo />,
  //   path: `${process.env.PUBLIC_URL}/apps/todo/:project`,
  //   meta: {
  //     appLayout: true,
  //     className: 'todo-application'
  //   }
  // },
  // {
  //   element: <Todo />,
  //   path: `${process.env.PUBLIC_URL}/apps/todo/:filter/:project`,
  //   meta: {
  //     appLayout: true,
  //     className: 'todo-application'
  //   }
  // },
  // {
  //   element: <Todo />,
  //   path: `${process.env.PUBLIC_URL}/apps/todo/tag/:tag/:project`,
  //   meta: {
  //     appLayout: true,
  //     className: 'todo-application'
  //   }
  // },
  {
    element: <Calendar />,
    path: `${process.env.PUBLIC_URL}/apps/calendar`
  },
  {
    element: <GanttComponent />,
    path: `${process.env.PUBLIC_URL}/apps/gantt`
  },
  {
    element: <Kanban />,
    path: `${process.env.PUBLIC_URL}/apps/kanban`,
    meta: {
      // appLayout: true,
      className: 'kanban-application'
    }
  },
  {
    element: <StickyNote />,
    path: `${process.env.PUBLIC_URL}/apps/sticky_notes`,
    meta: {
      className: 'kanban-application'
    }
  },
  {
    element: <InvoiceList />,
    path: `${process.env.PUBLIC_URL}/apps/invoice/list`
  },
  {
    element: <InvoicePreview />,
    path: `${process.env.PUBLIC_URL}/apps/invoice/preview/:id`
  },
  {
    path: `${process.env.PUBLIC_URL}/apps/invoice/preview`,
    element: <Navigate to='/apps/invoice/preview/4987' />
  },
  {
    element: <InvoiceEdit />,
    path: `${process.env.PUBLIC_URL}/apps/invoice/edit/:id`
  },
  {
    path: `${process.env.PUBLIC_URL}/apps/invoice/edit`,
    element: <Navigate to='/apps/invoice/edit/4987' />
  },
  {
    element: <InvoiceAdd />,
    path: `${process.env.PUBLIC_URL}/apps/invoice/add`
  },
  {
    path: `${process.env.PUBLIC_URL}/apps/invoice/print`,
    element: <InvoicePrint />,
    meta: {
      layout: 'blank'
    }
  },
  {
    element: <EcommerceShop />,
    path: `${process.env.PUBLIC_URL}/apps/ecommerce/shop`,
    meta: {
      className: 'ecommerce-application'
    }
  },
  {
    element: <EcommerceWishlist />,
    path: `${process.env.PUBLIC_URL}/apps/ecommerce/wishlist`,
    meta: {
      className: 'ecommerce-application'
    }
  },
  {
    path: `${process.env.PUBLIC_URL}/apps/ecommerce/product-detail`,
    element: <Navigate to='/apps/ecommerce/product-detail/apple-i-phone-11-64-gb-black-26' />,
    meta: {
      className: 'ecommerce-application'
    }
  },
  {
    path: `${process.env.PUBLIC_URL}/apps/ecommerce/product-detail/:product`,
    element: <EcommerceDetail />,
    meta: {
      className: 'ecommerce-application'
    }
  },
  {
    path: `${process.env.PUBLIC_URL}/apps/ecommerce/checkout`,
    element: <EcommerceCheckout />,
    meta: {
      className: 'ecommerce-application'
    }
  },
  {
    element: <ProjectList />,
    path: `${process.env.PUBLIC_URL}/apps/project/list`
  },
  {
    path: `${process.env.PUBLIC_URL}/apps/project/view`,
    element: <Navigate to='/apps/project/view/1' />
  },
  {
    element: <ProjectView />,
    path: `${process.env.PUBLIC_URL}/apps/project/:id`
  },
  {
    element: <TaskDetail />,
    // apps/project/7/task/view/4
    path: `${process.env.PUBLIC_URL}/apps/project/:projectId/task/:id`
  },
  {
    element: <UserList />,
    path: `${process.env.PUBLIC_URL}/apps/user/list`
  },
  {
    path: `${process.env.PUBLIC_URL}/apps/user/view`,
    element: <Navigate to='/apps/user/view/1' />
  },
  {
    element: <UserView />,
    path: `${process.env.PUBLIC_URL}/apps/user/view/:id`
  },
  {
    element: <Roles />,
    path: `${process.env.PUBLIC_URL}/apps/roles`
  },
  {
    element: <Permissions />,
    path: `${process.env.PUBLIC_URL}/apps/permissions`
  }
]

export default AppRoutes
