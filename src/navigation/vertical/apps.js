// ** Icons Import
import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Shield, Layers } from 'react-feather'

  let permission = {
    user: {create: false, edit: false, delete: false},
    project: {create: false, edit: false, delete: false},
    task: {create: false, edit: false, delete: false},
    gantt: {view: false},
    report: {view: false}
  }
  const role = JSON.parse(localStorage.getItem("userData"))?.role

  if (role) {
    permission = {
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
        create: !!(role === 'owner' || role === 'admin' || role === 'demo' || role === 'manager' || role === 'user'),
        view: !!(role === 'owner' || role === 'admin' || role === 'demo' || role === 'manager' || role === 'user')
      },
      report: {
        view: !!(role === 'owner' || role === 'admin' || role === 'demo')
      }
    }
  }
  
  let appRoutes = []
appRoutes = [
  // {
  //   header: 'Apps & Pages'
  // },
  {
    id: 'projects',
    title: 'Projects',
    icon: <Layers size={20} />,
    navLink: `${process.env.PUBLIC_URL}/apps/project/list`
  },
  {
    id: 'users',
    title: 'People',
    icon: <User size={20} />,
    navLink: `${process.env.PUBLIC_URL}/apps/user/list`
  },
  {
    id: 'kanban',
    title: 'Kanban',
    icon: <CheckSquare size={20} />,
    navLink: `${process.env.PUBLIC_URL}/apps/kanban`
  },
  {
    id: 'calendar',
    title: 'Calendar',
    icon: <Calendar size={20} />,
    navLink: `${process.env.PUBLIC_URL}/apps/calendar`
  },
  {
    id: 'notes',
    title: 'Notes',
    icon: <CheckSquare size={20} />,
    navLink: `${process.env.PUBLIC_URL}/apps/todo`
  }
  // {
  //   id: 'email',
  //   title: 'Email',
  //   icon: <Mail size={20} />,
  //   navLink: `${process.env.PUBLIC_URL}/apps/email`
  // }, {
  //   id: 'chat',
  //   title: 'Chat',
  //   icon: <MessageSquare size={20} />,
  //   navLink: `${process.env.PUBLIC_URL}/apps/chat`
  // },
   
  // {
  //   id: 'invoiceApp',
  //   title: 'Invoice',
  //   icon: <FileText size={20} />,
  //   children: [
  //     {
  //       id: 'invoiceList',
  //       title: 'List',
  //       icon: <Circle size={12} />,
  //       navLink: `${process.env.PUBLIC_URL}/apps/invoice/list`
  //     },
  //     {
  //       id: 'invoicePreview',
  //       title: 'Preview',
  //       icon: <Circle size={12} />,
  //       navLink: `${process.env.PUBLIC_URL}/apps/invoice/preview`
  //     },
  //     {
  //       id: 'invoiceEdit',
  //       title: 'Edit',
  //       icon: <Circle size={12} />,
  //       navLink: `${process.env.PUBLIC_URL}/apps/invoice/edit`
  //     },
  //     {
  //       id: 'invoiceAdd',
  //       title: 'Add',
  //       icon: <Circle size={12} />,
  //       navLink: `${process.env.PUBLIC_URL}/apps/invoice/add`
  //     }
  //   ]
  // },

  // {
  //   id: 'roles-permissions',
  //   title: 'Roles & Permissions',
  //   icon: <Shield size={20} />,
  //   children: [
  //     {
  //       id: 'roles',
  //       title: 'Roles',
  //       icon: <Circle size={12} />,
  //       navLink: `${process.env.PUBLIC_URL}/apps/roles`
  //     },
  //     {
  //       id: 'permissions',
  //       title: 'Permissions',
  //       icon: <Circle size={12} />,
  //       navLink: `${process.env.PUBLIC_URL}/apps/permissions`
  //     }
  //   ]
  // },
  // {
  //   id: 'eCommerce',
  //   title: 'eCommerce',
  //   icon: <ShoppingCart size={20} />,
  //   children: [
  //     {
  //       id: 'shop',
  //       title: 'Shop',
  //       icon: <Circle size={12} />,
  //       navLink: `${process.env.PUBLIC_URL}/apps/ecommerce/shop`
  //     },
  //     {
  //       id: 'detail',
  //       title: 'Details',
  //       icon: <Circle size={12} />,
  //       navLink: `${process.env.PUBLIC_URL}/apps/ecommerce/product-detail`
  //     },
  //     {
  //       id: 'wishList',
  //       title: 'Wish List',
  //       icon: <Circle size={12} />,
  //       navLink: `${process.env.PUBLIC_URL}/apps/ecommerce/wishlist`
  //     },
  //     {
  //       id: 'checkout',
  //       title: 'Checkout',
  //       icon: <Circle size={12} />,
  //       navLink: `${process.env.PUBLIC_URL}/apps/ecommerce/checkout`
  //     }
  //   ]
  // },
  
  // {
  //   id: 'users',
  //   title: 'User',
  //   icon: <User size={20} />,
  //   children: [
  //     {
  //       id: 'list',
  //       title: 'List',
  //       icon: <Circle size={12} />,
  //       navLink: `${process.env.PUBLIC_URL}/apps/user/list`
  //     },
  //     {
  //       id: 'view',
  //       title: 'View',
  //       icon: <Circle size={12} />,
  //       navLink: `${process.env.PUBLIC_URL}/apps/user/view`
  //     }
  //   ]
  // }
]

if (permission && permission.gantt && permission.gantt.view) {
  appRoutes.push({
    id: 'gantt',
    title: 'Gantt',
    icon: <FileText size={20} />,
    navLink: `${process.env.PUBLIC_URL}/apps/gantt`
  })
}

if (permission && permission.report && permission.report.view) {
  appRoutes.push(
  {
    id: 'reports',
    title: 'Reports',
    icon: <Shield size={20} />,
    navLink: `${process.env.PUBLIC_URL}/apps/reports`
  })
}

if (permission && permission.report && permission.report.view) {
  appRoutes.push(
  {
    id: 'sticky_notes',
    title: 'Sticky Notes',
    icon: <Shield size={20} />,
    navLink: `${process.env.PUBLIC_URL}/apps/sticky_notes`
  })
}

export default appRoutes