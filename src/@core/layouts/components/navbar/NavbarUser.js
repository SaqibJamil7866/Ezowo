// ** Dropdowns Imports
// import IntlDropdown from './IntlDropdown'
// import CartDropdown from './CartDropdown'
import UserDropdown from './UserDropdown'
import { useNavigate } from 'react-router-dom'
// import NavbarSearch from './NavbarSearch'
import NotificationDropdown from './NotificationDropdown'

// ** Third Party Components
import { Sun, Moon, File } from 'react-feather'
import { useDispatch } from 'react-redux'

// ** Reactstrap Imports
import { NavItem, NavLink } from 'reactstrap'
import { handleStickyNotes } from '@store/navbar'

const NavbarUser = props => {
  // ** Props
  const { skin, setSkin } = props
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === 'dark') {
      return <Sun className='ficon' onClick={() => setSkin('light')} />
    } else {
      return <Moon className='ficon' onClick={() => setSkin('dark')} />
    }
  }

  const openStickyNotes = () => {
    dispatch(handleStickyNotes(true))
  }

  return (
    <ul className='nav navbar-nav align-items-center ms-auto'>
      {/* <IntlDropdown /> */}
      <NavItem className='d-none d-lg-block'>
        <NavLink className='nav-link-style'>
          <File  className='ficon' onClick={()=>openStickyNotes()}  />
        </NavLink >
      </NavItem>
      <NavItem className='d-none d-lg-block'>
        <NavLink className='nav-link-style'>
          <ThemeToggler />
        </NavLink>
      </NavItem>
      {/* <NavbarSearch /> */}
      {/* <CartDropdown /> */}
      {/* <NotificationDropdown /> */}
      <UserDropdown />
    </ul>
  )
}
export default NavbarUser
