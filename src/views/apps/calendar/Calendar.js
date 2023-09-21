// ** React Import
import { useState, useEffect, useRef, memo, Fragment } from 'react'

// ** Full Calendar & it's Plugins
import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

// ** Third Party Components
import toast from 'react-hot-toast'
import { Menu } from 'react-feather'
import { Card, CardBody } from 'reactstrap'

import { getAllCalendarTasks } from "../../../services/Apis"

const Calendar = props => {

  const [tasks, setTasks] = useState([])
  // ** Refs
  const calendarRef = useRef(null)

  // ** Props
  const {
    isRtl,
    // store,
    dispatch,
    calendarsColor,
    // calendarApi,
    // setCalendarApi,
    handleAddEventSidebar,
    blankEvent,
    toggleSidebar,
    selectEvent,
    updateEvent
  } = props

  // ** UseEffect checks for CalendarAPI Update
  // useEffect(() => {
  //   // console.error('DATA ', calendarRef.current.getApi())
  //   console.error(' DATA ', store.events)
  //   if (calendarApi === null) {
  //     setCalendarApi(calendarRef.current.getApi())
  //   }
  // }, [calendarApi])

  useEffect(() => {
    const projectId = ''
    const startDate = '2022-09-01'
    const endDate = '2023-01-31'
    const params = {
      projectId: '',
      startDate: '2000-01-01',
      endDate: '2099-12-31',
      user_id: JSON.parse(localStorage.getItem('userData')).id
    }
    // 2022-09-01&end_date=2023-01-31
    
      getAllCalendarTasks(params).then((result) => {
        if (result && result.response && (result.response.code === 200 || result.response.code === 400) && result.response.data) {
          // const date = moment().format()
          // eslint-disable-next-line no-mixed-operators
          // const nextDay = moment().format()//new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
          // const finalData = [
          //   {
          //     id: 1,
          //     url: '',
          //     title: 'Design Review',
          //     start: date,
          //     end: nextDay,
          //     allDay: false,
          //     extendedProps: {
          //       calendar: 'Business'
          //     }
          //   }
          // ]
        
          
          const finalData = result.response.data
          for (let i = 0; i < finalData.length; i++) {
            // eslint-disable-next-line no-mixed-operators
            finalData[i].start = new Date(new Date().getTime() + 24 * 60 * 60 * 1000) //moment(finalData[i].start_date).format()
            // eslint-disable-next-line no-mixed-operators
            finalData[i].end = new Date(new Date().getTime() + 48 * 60 * 60 * 1000) //finalData[i].end_date
            finalData[i].extendedProps = {calendar: 'Business'}
          }
          
          setTasks({ events: finalData})
        }
      })

    
    // // const prevDay = new Date().getDate() - 1
    // // eslint-disable-next-line no-mixed-operators
    // console.error(date)
    // console.error(nextDay)

    // prettier-ignore
    // const nextMonth = date.getMonth() === 11 ? new Date(date.getFullYear() + 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() + 1, 1)
    // prettier-ignore
    // const prevMonth = date.getMonth() === 11 ? new Date(date.getFullYear() - 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() - 1, 1)

    // const data = {
    //   events: [
    //     {
    //       id: 1,
    //       url: '',
    //       title: 'Design Review',
    //       start: date,
    //       end: nextDay,
    //       allDay: false,
    //       extendedProps: {
    //         calendar: 'Business'
    //       }
    //     }
    //   ]
    // }

    // setTasks(data)

  }, [])

  // ** calendarOptions(Props)
  const calendarOptions = {
    events: tasks,
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      start: 'sidebarToggle, prev,next, title',
      // end: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      end: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    /*
      Enable dragging and resizing event
      ? Docs: https://fullcalendar.io/docs/editable
    */
    editable: true,

    /*
      Enable resizing event from start
      ? Docs: https://fullcalendar.io/docs/eventResizableFromStart
    */
    eventResizableFromStart: true,

    /*
      Automatically scroll the scroll-containers during event drag-and-drop and date selecting
      ? Docs: https://fullcalendar.io/docs/dragScroll
    */
    dragScroll: true,

    /*
      Max number of events within a given day
      ? Docs: https://fullcalendar.io/docs/dayMaxEvents
    */
    dayMaxEvents: 2,

    /*
      Determines if day names and week names are clickable
      ? Docs: https://fullcalendar.io/docs/navLinks
    */
    navLinks: true,

    eventClassNames({ event: calendarEvent }) {
      // eslint-disable-next-line no-underscore-dangle
      const colorName = calendarsColor[calendarEvent._def.extendedProps.calendar]

      return [
        // Background Color
        `bg-light-${colorName}`
      ]
    },

    eventClick({ event: clickedEvent }) {
      dispatch(selectEvent(clickedEvent))
      handleAddEventSidebar()

      // * Only grab required field otherwise it goes in infinity loop
      // ! Always grab all fields rendered by form (even if it get `undefined`) otherwise due to Vue3/Composition API you might get: "object is not extensible"
      // event.value = grabEventDataFromEventApi(clickedEvent)

      // eslint-disable-next-line no-use-before-define
      // isAddNewEventSidebarActive.value = true
    },

    customButtons: {
      sidebarToggle: {
        text: <Menu className='d-xl-none d-block' />,
        click() {
          toggleSidebar(true)
        }
      }
    },

    dateClick(info) {
      const ev = blankEvent
      ev.start = info.date
      ev.end = info.date
      dispatch(selectEvent(ev))
      handleAddEventSidebar()
    },

    /*
      Handle event drop (Also include dragged event)
      ? Docs: https://fullcalendar.io/docs/eventDrop
      ? We can use `eventDragStop` but it doesn't return updated event so we have to use `eventDrop` which returns updated event
    */
    eventDrop({ event: droppedEvent }) {
      dispatch(updateEvent(droppedEvent))
      toast.success('Event Updated')
    },

    /*
      Handle event resize
      ? Docs: https://fullcalendar.io/docs/eventResize
    */
    eventResize({ event: resizedEvent }) {
      dispatch(updateEvent(resizedEvent))
      toast.success('Event Updated')
    },

    ref: calendarRef,

    // Get direction from app state (store)
    direction: isRtl ? 'rtl' : 'ltr'
  }

  return (
    <Card className='shadow-none border-0 mb-0 rounded-0'>
      <CardBody className='pb-0'>
        <FullCalendar {...calendarOptions} />{' '}
      </CardBody>
    </Card>
  )
}

export default memo(Calendar)
