// ** React Imports
import { Fragment, useState } from "react"

// ** Reactstrap Imports
import { Label } from "reactstrap"

// ** Third Party Components
import Flatpickr from "react-flatpickr"

const PickerHumanFriendly = (props) => {
  // ** State
  const [picker, setPicker] = useState(new Date())
  return (
    <Fragment>
      <Label className="form-label" for={props.name ? props.name : 'hf-picker'}>
        {props.label ? props.label : "Date"} {props.required && <span className='text-danger'>*</span>}
      </Label>
      <Flatpickr
        value={props.initDate ? picker : ''}
        id={props.name ? props.name : 'hf-picker'}
        name={props.name}
        className="form-control"
        onChange={(date) => setPicker(date)}
        options={{
          altInput: true,
          altFormat: "F j, Y",
          dateFormat: "Y-m-d"
        }}
      />
    </Fragment>
  )
}

export default PickerHumanFriendly