import { useContext } from 'react'
import moment from 'moment'
import classnames from 'classnames'
import { getFormattedDate } from '@utils'
import Chart from 'react-apexcharts'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import Avatar from '@components/avatar'

import { Card, CardTitle, CardBody, CardText, Badge, Button } from 'reactstrap'

const trackBgColor = '#e9ecef'
const currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss A")

const CardAppDesign = ({projectData, data, teamData}) => {
  
  const { colors } = useContext(ThemeColors)
  const chartOpt = {
    type: 'radialBar',
    // series: [],
    height: 80,
    width: 80,
    options: {
      grid: {
        show: true,
        padding: {
          left: -15,
          right: -15,
          top: -15,
          bottom: -15
        }
      },
      colors: [colors.primary.main],
      plotOptions: {
        radialBar: {
          hollow: {
            size: '42%'
          },
          track: {
            background: trackBgColor
          },
          dataLabels: {
            showOn: 'always',
            name: {
              show: false
            },
            value: {
              show: false
            }
          }
        }
      },
      stroke: {
        lineCap: 'round'
      }
    }
  }

  let projectTaskSum = 0
  let projectTaskSumPercentage = 0

  if (projectData) {
    projectData.forEach(function(item, i) {
      projectTaskSum = projectTaskSum + item.count
    })
    if (projectTaskSum) {
      projectTaskSumPercentage = Math.floor((projectData[projectData.length - 1].count / projectTaskSum) * 100)
      if (projectTaskSumPercentage) {
        projectTaskSumPercentage = projectTaskSumPercentage
        chartOpt['series'] = [projectTaskSumPercentage]
      }
    }
  }
  // const avatarArr = [
  //   {
  //     img: require('@src/assets/images/portrait/small/avatar-s-14.jpg').default,
  //     imgHeight: 34,
  //     imgWidth: 34
  //   }, {
  //     img: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
  //     imgHeight: 34,
  //     imgWidth: 34
  //   },
  //   // {
  //   //   content: 'PI',
  //   //   color: 'light-danger'
  //   // },
  //   {
  //     img: require('@src/assets/images/portrait/small/avatar-s-14.jpg').default,
  //     imgHeight: 34,
  //     imgWidth: 34
  //   },
  //   {
  //     img: require('@src/assets/images/portrait/small/avatar-s-7.jpg').default,
  //     imgHeight: 34,
  //     imgWidth: 34
  //   }, 
  //   {
  //     img: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
  //     imgHeight: 34,
  //     imgWidth: 34
  //   }
  // ]

  const designPlanningArr = [
    {
      title: 'Start Date',
      subtitle: getFormattedDate(data?.start_date, 'DD MMMM, YYYY')
    },
    {
      title: 'End Date',
      subtitle: getFormattedDate(data?.end_date, 'DD MMMM, YYYY')
    }
  ]

  return (
    <Card className='card-app-design'>
      <CardBody>
        <div className='employee-task d-flex justify-content-between align-items-center'>
        <div className='d-flex'>
          <div className='my-auto'>
            <h6 className='card-title mb-0'>{data?.title || ''}</h6>
          </div>
        </div>
        {/* <div className='d-flex align-items-center'> */}
          {projectTaskSumPercentage ? <div style={{position: 'absolute', top: '5px', right: '10px', textAlign: 'center' }}>
            <Chart
              options={chartOpt.options}
              series={chartOpt.series}
              type={chartOpt.type}
              height={chartOpt.height}
              width={chartOpt.width}
            />
            <small>{projectTaskSumPercentage}%</small>
          </div> : null}
        </div>
        
        {data?.description && <CardText className='font-small-2 mb-2'>
        {data?.description}
        </CardText>}
        <div className='design-group mb-2 pt-50'>
          {data && data?.manager && data?.manager?.first_name ? <>
            <h6 className='card-title mb-1'>Manager</h6>
            <Badge className='me-1' color='warning'>
            {`${data?.manager?.first_name  } ${  data?.manager?.last_name}`}
          </Badge>
          </> : null}
          {/* <Badge color='light-primary'>Wireframe</Badge> */}
        </div>
        {teamData && teamData.length ? <div className='design-group pt-25'>
          <h6 className='card-title mb-1'>Members{teamData && teamData?.length ? ` (${  teamData?.length  })` : ''}</h6>
          {teamData.map((obj, index) => {
            return <Avatar key={index} className={classnames({ 'me-75': index !== teamData.length - 1 })} {...obj} />
          })}
        </div> : null}
        <div className='design-planning-wrapper mb-2 py-75'>
          { data && data?.start_date ? designPlanningArr.map(item => (
            <div key={item.title} className='design-planning'>
              <CardText className='mb-25'>{item.title}</CardText>
              <h6 className='mb-0'>{item.subtitle}</h6>
            </div>
          )) : null}
        </div>
        {/* <div className='d-grid'>
          <Button color='primary'>Back</Button>
          <Button color='primary'>View Tasks</Button>
        </div> */}
      </CardBody>
    </Card>
  )
}

export default CardAppDesign
