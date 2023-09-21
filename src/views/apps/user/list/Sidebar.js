// ** React Import
import { useEffect, useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Third Party Components
import Select from 'react-select'
import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import { Button, Label, FormText, Form, Input } from 'reactstrap'

import { addUser } from "../../../../services/Apis"

// ** Store & Actions
// import { addUser } from '../store'
import { useDispatch } from 'react-redux'
// import PickerHumanFriendly from '../../../forms/form-elements/datepicker/PickerHumanFriendly'

// const defaultValues = {
//   first_name: '',
//   last_name: '',
//   role_id: '',
//   phone1: '',
//   reporting_to: '',
//   designation: '',
//   // username: '',
//   country: ''
// }

const countryOptions = [
  { label: 'Australia', value: 'Australia' },
  { label: 'Bangladesh', value: 'Bangladesh' },
  { label: 'Belarus', value: 'Belarus' },
  { label: 'Brazil', value: 'Brazil' },
  { label: 'Canada', value: 'Canada' },
  { label: 'China', value: 'China' },
  { label: 'France', value: 'France' },
  { label: 'Germany', value: 'Germany' },
  { label: 'India', value: 'India' },
  { label: 'Indonesia', value: 'Indonesia' },
  { label: 'Israel', value: 'Israel' },
  { label: 'Italy', value: 'Italy' },
  { label: 'Japan', value: 'Japan' },
  { label: 'Korea', value: 'Korea' },
  { label: 'Mexico', value: 'Mexico' },
  { label: 'Philippines', value: 'Philippines' },
  { label: 'Russia', value: 'Russia' },
  { label: 'South', value: 'South' },
  { label: 'Thailand', value: 'Thailand' },
  { label: 'Turkey', value: 'Turkey' },
  { label: 'Ukraine', value: 'Ukraine' },
  { label: 'United Arab Emirates', value: 'United Arab Emirates' },
  { label: 'United Kingdom', value: 'United Kingdom' },
  { label: 'United States', value: 'United States' }
]

// const checkIsValid = data => {
//   return Object.values(data).every(field => (typeof field === 'object' ? field !== null : field.length > 0))
// }

const SidebarNewUsers = ({ open, fetchUsers, toggleSidebar, userItem, userOptions, roles }) => {
  
  const rolesData = roles.filter(item => item.value)

  const [reportingTo, setReportingTo] = useState({})
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState({})
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState({})
  const [designation, setDesignation] = useState('')

  const heading = userItem && userItem.id ? 'Edit People' : 'Add People'

  useEffect(() => {
    if (userItem && userItem?.first_name) {

      setFirstName(userItem?.first_name)
      setLastName(userItem?.last_name)
      setEmail(userItem?.email)
      setDesignation(userItem?.designation)
      setPhone(userItem?.phone1)
      setCountry({label: userItem?.country, value: userItem?.country})

      if (userItem?.role) {
        setRole({
          id: userItem?.role?.id,
          title: userItem?.role?.title,
          slug: userItem?.role?.slug,
          value: userItem?.role?.id,
          label: userItem?.role?.title
        })  
      }

      if (userItem?.reporting_user && userItem?.reporting_user?.id) {
        setReportingTo({
          id: userItem?.reporting_user?.id,
          title: userItem?.reporting_user?.title,
          value: userItem?.reporting_user?.id,
          label: `${userItem?.reporting_user?.first_name  } ${  userItem?.reporting_user?.last_name}`
        }) 
      } 
    }
  }, [userItem])
  
  const onSubmit = (e) => {
    e.preventDefault()
      
      const postData = {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        phone1: phone,
        role_id: role.id,
        country: country.value,
        gender: "unknown",
        reporting_to: reportingTo.id,
        designation
        // departments: [1], 
      }
      if (userItem && userItem?.id) {
        postData['id'] = userItem?.id
      }
      
      console.error(' POST ', postData)
      // return
      
      addUser(postData)
        .then(res => {
          console.error(' RESPONSE ', res)
          if (res.response.code === 200) {
            toggleSidebar()
            fetchUsers()
          } else {
            console.error(' ERROR: Adding User')
          }
        })
        .catch(err => {
          console.log('ERROR: ', err)
        })
  }

  const handleSidebarClosed = () => {
    // for (const key in defaultValues) {
    //   setValue(key, '')
    // }
    // setRole('subscriber')
    // setPlan('basic')

  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title={heading}
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
      onClosed={handleSidebarClosed}
    >
      <Form onSubmit={onSubmit}>
        <div className='mb-1'>
          <Label className='form-label' for='first_name'>
            First Name <span className='text-danger'>*</span>
          </Label>
            <Input name='first_name' id='first_name' placeholder='' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='last_name'>
            Last Name <span className='text-danger'>*</span>
          </Label>
          <Input name='last_name' id='last_name' placeholder='' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='password'>
            Password <span className='text-danger'>*</span>
          </Label>
          <Input name='password' id='password' placeholder='' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='userEmail'>
            Email <span className='text-danger'>*</span>
          </Label>
          <Input name='email' id='email' placeholder='john.doe@example.com' value={email} onChange={(e) => setEmail(e.target.value)} />
          <FormText color='muted'>You can use letters, numbers & periods</FormText>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='country_id'>
            Country <span className='text-danger'>*</span>
          </Label>
          <Select
            id='country'
            isClearable={false}
            className='react-select'
            classNamePrefix='select'
            options={countryOptions}
            value={country}
            onChange={(item) => {
              setCountry(item)
            }}
            theme={selectThemeColors}
            />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='phone1'>
            Phone <span className='text-danger'>*</span>
          </Label>
          <Input name='phone1' id='phone1' placeholder='john.doe@example.com' value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='country'>
            Role <span className='text-danger'>*</span>
          </Label>
          <Select
            isClearable={false}
            classNamePrefix='select'
            options={rolesData}
            value={role}
            onChange={(item) => setRole(item)}
            theme={selectThemeColors}
            className={classnames('react-select')}
          />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='reporting-to'>
            Reporting To
          </Label>
          <Select
            id='reporting-to'
            name='reporting_to'
            isClearable={false}
            className='react-select'
            classNamePrefix='select'
            options={userOptions}
            value={reportingTo}
            onChange={(item) => setReportingTo(item)}
            theme={selectThemeColors}
          />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='designation'>
            Designation
          </Label>
          <Input name='designation' id='designation' placeholder='' value={designation} onChange={(e) => setDesignation(e.target.value)} />
        </div>
        
        <Button type='submit' className='me-1' color='primary'>
          Submit
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
          Cancel
        </Button>

      </Form>
    </Sidebar>
  )
}

export default SidebarNewUsers
