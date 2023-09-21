// ** React Imports
import { useEffect, useState } from 'react'
// import { Card, CardHeader, CardTitle, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
// ** Third Party Components
import axios from 'axios'
import classnames from 'classnames'
import * as Icon from 'react-feather'
import Chart from 'react-apexcharts'

// ** Reactstrap Imports
import {
  Row, Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'

const Customers = props => {

  // console.error(props.cdata)
  // ** State
  // const [data, setData] = useState(null)

  const colorsData = [props.primary, props.warning, props.danger, props.secondary, props.success, props.info, props.dark]

  const data = props.cdata.map((item, index) => {
    return { ...item, 
      icon: 'Circle',
      iconColor: 'text-primary',
      text: item?.type?.title || '',
      result: item.count
    }
  })

  // console.error(data)

  const pluck = (arr, key) => arr.map(i => i[key])

  const options = {
      chart: {
        toolbar: {
          show: false
        }
      },
      labels: pluck(data, 'text'),
      dataLabels: {
        enabled: true
      },
      legend: { show: false },
      stroke: {
        width: 2
      },
      colors: colorsData
    },
    series = pluck(data, 'result')

  const renderChartInfo = () => {
    return data.map((item, index) => {
      const IconTag = Icon[item.icon]
      return (
        <div
          key={index}
          className={classnames('d-flex justify-content-between', {
            'mb-1': index !== data.length - 1
          })}
        >
          <div className='d-flex align-items-center'>
            <IconTag
              size={15}
              className={classnames({
                [item.iconColor]: item.iconColor
              })}
            />
            <span className='fw-bold ms-75'>{item.text}</span>
          </div>
          <span>{item.result}</span>
        </div>
      )
    })
  }

  return data !== null ? (
    <Card>
      <CardHeader className='align-items-end'>
        <CardTitle tag='h4'>Project Task Status</CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col lg='5' md='12' sm='12'>
            {data && data.length ? <div className='pt-2'>{renderChartInfo()}</div> : null }
          </Col>
          <Col lg='7' md='12' sm='12'>
            <div className=''>
            <Chart options={options} series={series} type='pie' height={325} />
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  ) : null
}
export default Customers
