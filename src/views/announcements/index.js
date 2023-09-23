// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'

// ** Third Party Components
import { useForm } from 'react-hook-form'

import toast from 'react-hot-toast'
import _ from 'lodash';
// ** Reactstrap Imports
import { Row, Col, Label, Button, Form, ModalBody, ModalFooter} from 'reactstrap'

import { deleteAnnouncement, getAllProjects, saveAnnouncement } from '../../services/Apis'
import { InputField } from '../components/reacthookFields/inputField'
import { SelectField } from '../components/reacthookFields/selectField'
import { useEffect, useState } from 'react'

const defaultValues = {
    title: '',
    details: '',
    project_id: ''
}

const AnnouncementForm = ({fromWhere, handleClose}) => {

    // ** Hooks
    const dispatch = useDispatch()
    const store = useSelector(state => state.home);

    const {
        control,
        setError,
        setValue,
        getValues,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ defaultValues })

    const onSelectProject = (e) => {
        setValue('project', e);
        setValue('project_id', e.id)
    }


    useEffect(() => {
        if(store.announcementModal?.id && store.projects?.length){
            const foundProject = store.projects.find((project)=> project.id == store.announcementModal.project_id);
            if(foundProject) {
                reset({...store.announcementModal, project: foundProject})
            }
        }
    }, [store, store.projects])

    const handleDelete = () => {
        const data = {id: getValues('id')}
        deleteAnnouncement(data).then(res => {
            toast(t => (res.response.msg));
            if(res.response.code == 200) {
                let announcements = _.cloneDeep(store.announcements);
                const foundAnnouncementIndex = announcements.findIndex((announcement) => announcement.id == data.id);
                if(foundAnnouncementIndex > -1) {
                    announcements.splice(foundAnnouncementIndex,1)
                }
                dispatch({type: 'home/setAnnouncements', payload: [...announcements]})
                handleClose();
            }
        })
        .catch(err => console.log(err))
    }

    const onSubmit = data => {
        
        saveAnnouncement(data)
        .then(res => {
            toast(t => (res.response.msg));
            if(res.response.code == 200) {
                let announcements = _.cloneDeep(store.announcements);
                const foundAnnouncement = announcements.find((announcement) => announcement.id == res.response.data.id);
                if(foundAnnouncement) {
                    const index = announcements.indexOf(foundAnnouncement);
                    announcements[index] = res.response.data;
                }
                else{
                    announcements.unshift(res.response.data);
                }
                dispatch({type: 'home/setAnnouncements', payload: [...announcements]})
                handleClose();
            }
        })
        .catch(err => console.log(err))
    }

  return (
    <>
        <ModalBody>
        <Row className='m-0'>
            <Col className='d-flex align-items-center' lg='12' sm='12'>
                <Col className='mx-auto' sm='12' md='12' lg='12'>
                    <Form action='/' id="announcement_form" className='auth-register-form mt-2' onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-1'>
                            <Label className='form-label'>
                                Title
                            </Label>
                            <InputField
                                name="title"
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Please enter Title",
                                    },
                                }}
                                errors={errors}
                            />
                        </div>
                        <div className='mb-1'>
                            <Label className='form-label'>
                                Details
                            </Label>
                            <InputField
                                name="details"
                                type="textarea"
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Please enter Details",
                                    },
                                }}
                                errors={errors}
                            />
                        </div>
                        <div className='mb-1'>
                            <Label className='form-label' for='register-password'>
                            Project
                            </Label>
                            <SelectField
                                name='project'
                                control={control}
                                onChange={(val)=>onSelectProject(val)}
                                getOptionLabel={(e) => e.title}
                                showLabel={"id"}
                                optionData={store.projects}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Please select Project",
                                    },
                                }}
                                errors={errors}
                            />
                        </div>
                    </Form>
                </Col>
            </Col>
        </Row>
        </ModalBody>
        <ModalFooter>
            <Button type='submit' form="announcement_form" color='primary'>
                Save
            </Button>
            {fromWhere == 'popup' ?
                <Button color='flat-danger' onClick={() => handleClose()}>
                    Cancel
                </Button>
                : null
            }
            {fromWhere == 'popup' && getValues('id') ?
                <Button color="danger" onClick={() => handleDelete()}>
                    Delete
                </Button>
                : null
            }
        </ModalFooter>
    </>
  )
}

export default AnnouncementForm
