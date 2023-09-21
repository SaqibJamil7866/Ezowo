// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Label,
  Input,
  Modal,
  Button,
  CardBody,
  CardTitle,
  ModalBody,
  CardHeader,
  ModalHeader,
  FormFeedback
} from 'reactstrap'

import { useForm, Controller } from 'react-hook-form'


const defaultValues = {
  lastName: '',
  firstName: ''
}

const GettingKnowQuestions = () => {
  // ** States
  const [show, setShow] = useState(false)

  // ** Hooks
  const {
    reset,
    control,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      setShow(false)
      reset()
    } else {
      setError('firstName', {
        type: 'manual'
      })
      setError('lastName', {
        type: 'manual'
      })
    }
  }

  const onDiscard = () => {
    clearErrors()
    setShow(false)
    reset()
  }

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Getting Know</CardTitle>
          <Button color='primary' size='sm' onClick={() => setShow(true)}>
            Getting Know Questions
          </Button>
        </CardHeader>
      </Card>

      <Modal
        isOpen={show}
        onClosed={onDiscard}
        toggle={() => setShow(!show)}
        className='modal-dialog-centered modal-lg'
      >
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='pb-5 px-sm-4 mx-50'>
          <h1 className='address-title mb-1'>What's update you want?.</h1>
          <Row tag='form' className='gy-1 gx-2' onSubmit={handleSubmit(onSubmit)}>
            <Col xs={12}>
              <Row className='custom-options-checkable'>
                <Col md={4} className='mb-md-0 mb-2'>
                  <Input
                    type='radio'
                    defaultChecked
                    id='homeAddress'
                    name='addressRadio'
                    value='homeAddress'
                    className='custom-option-item-check'
                  />
                  <label className='custom-option-item px-2 py-1' htmlFor='homeAddress'>
                    <span className='d-block'>Delivery time (7am – 9pm)</span>
                  </label>
                </Col>
                <Col md={4} className='mb-md-0 mb-2'>
                  <Input
                    type='radio'
                    id='officeAddress'
                    name='addressRadio'
                    value='officeAddress'
                    className='custom-option-item-check'
                  />
                  <label className='custom-option-item px-2 py-1' htmlFor='officeAddress'>
                    <span className='d-block'>Delivery time (10am – 6pm)</span>
                  </label>
                </Col>
              </Row>
            </Col>
            <Col className='text-center' xs={12}>
                <Button type='reset' className='mt-2' color='secondary' outline onClick={onDiscard}>
                    Back
                </Button>
                <Button type='submit' className='me-1 mt-2' color='primary'>
                    Next
                </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default GettingKnowQuestions
