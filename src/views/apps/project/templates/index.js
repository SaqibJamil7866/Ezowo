// ** User List Component
import Table from '../list/Table'

// ** Styles
import '@styles/react/apps/app-users.scss'

const TemplateList = () => {

  return (
    <div className='app-user-list'>
      <Table fromWhere="template" />
    </div>
  )
}

export default TemplateList