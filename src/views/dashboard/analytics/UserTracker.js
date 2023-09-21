// ** React Imports
import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'

import { calculateTaskPercentage } from '@utils'

import { getProjectTasksCountByStatus } from "../../../services/Apis"

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'

const UserTracker = props => {
  
  const [data, setData] = useState({
    totalTicket: 0,
    todo: 0,
    inprogress: 0,
    completed: 0
  })

  const fetchProjectTasksCountByStatus = () => {
    const params = {
      user_id: JSON.parse(localStorage.getItem('userData')).id
    }
    getProjectTasksCountByStatus(params).then((res) => {
      const result = res.response
      if (
        result &&
        (result.code === 200 || result.code === 400) &&
        result.data
      ) {
        setData({
          totalTicket: result.data[0].count + result.data[1].count + result.data[2].count + result.data[3].count + result.data[4].count + result.data[5].count,
          todo: result.data[0].count,
          inprogress: result.data[1].count + result.data[2].count + result.data[3].count + result.data[4].count,
          completed: result.data[5].count
        })
      }
    })
  }

  useEffect(() => {
    fetchProjectTasksCountByStatus()    
  }, [])
  
  const progressVal = data.totalTicket > 0 ? ((data.completed / data.totalTicket) * 100) : 0

  const options = {
      plotOptions: {
        radialBar: {
          size: 150,
          offsetY: 20,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '65%'
          },
          track: {
            background: '#fff',
            strokeWidth: '100%'
          },
          dataLabels: {
            name: {
              offsetY: -5,
              fontFamily: 'Montserrat',
              fontSize: '1rem'
            },
            value: {
              offsetY: 15,
              fontFamily: 'Montserrat',
              fontSize: '1.714rem'
            }
          }
        }
      },
      colors: [props.danger],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: [props.primary],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        dashArray: 8
      },
      labels: ['Task Progress']
    },
    series = [Math.floor(progressVal)]

  return data !== null ? (
    <Card>
      <CardHeader className='pb-0'>
        <CardTitle tag='h4'>My Task Tracker</CardTitle>
      </CardHeader>
      <CardBody>
        {/* {data && data.totalTicket ? <> */}
        <>
        <Row>
          <Col sm='2' className='d-flex flex-column flex-wrap text-center'>
            <h1 className='font-large-2 fw-bolder mt-2 mb-0'>{data.totalTicket}</h1>
            <CardText>Tickets</CardText>
          </Col>
          <Col sm='10' className='d-flex justify-content-center'>
            <Chart options={options} series={series} type='radialBar' height={270} id='user-tracker-card' />
          </Col>
        </Row>
        <div className='d-flex justify-content-between mt-1'>
          <div className='text-center'>
            <CardText className='mb-50'>To Start</CardText>
            <span className='font-large-1 fw-bold'>{data.todo}</span>
          </div>
          <div className='text-center'>
            <CardText className='mb-50'>In Progress</CardText>
            <span className='font-large-1 fw-bold'>{data.inprogress}</span>
          </div>
          <div className='text-center'>
            <CardText className='mb-50'>Completed</CardText>
            <span className='font-large-1 fw-bold'>{data.completed}</span>
          </div>
        </div>
        </>
         {/* : <div style={{marginTop: '20px'}}>No tickets found.</div>} */}
      </CardBody>
    </Card>
  ) : null
}
export default UserTracker
