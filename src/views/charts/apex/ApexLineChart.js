// ** Third Party Components
import Chart from 'react-apexcharts'
import { ArrowDown } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, Badge } from 'reactstrap'

const ApexLineChart = ({ direction, warning }) => {
  // ** Chart Options
  const options = {
    chart: {
      zoom: {
        enabled: true
      },
      parentHeightOffset: 0,
      toolbar: {
        show: false
      }
    },

    markers: {
      strokeWidth: 7,
      strokeOpacity: 1,
      strokeColors: ['#fff'],
      colors: [warning]
    },
    dataLabels: {
      enabled: true
    },
    stroke: {
      curve: 'straight'
    },
    colors: [warning],
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    tooltip: {
      custom(data) {
        return `<div class='px-1 py-50'>
              <span>${data.series[data.seriesIndex][data.dataPointIndex]}%</span>
            </div>`
      }
    },
    xaxis: {
      categories: [
        '01/12',
        '8/12',
        '9/12',
        '10/12',
        '11/12',
        '12/12',
        '13/12',
        '14/12',
        '15/12',
        '16/12',
        '17/12',
        '18/12',
        '19/12',
        '20/12',
        '21/12'
      ]
    },
    yaxis: {
      opposite: direction === 'rtl'
    }
  }

  // ** Chart Series
  const series = [
    {
      data: [280, 200, 220, 180, 270, 250, 70, 90, 200, 150, 160, 100, 150, 100, 50]
    }
  ]

  return (
    <Card>
      <CardHeader className='d-flex flex-sm-row flex-column justify-content-md-between align-items-start justify-content-start'>
        <div>
          <CardTitle className='mb-75' tag='h4'>
            Balance
          </CardTitle>
          <CardSubtitle className='text-muted'>Commercial networks & enterprises</CardSubtitle>
        </div>
        <div className='d-flex align-items-center flex-wrap mt-sm-0 mt-1'>
          <h5 className='fw-bolder mb-0 me-1'>$ 100,000</h5>
          <Badge color='light-secondary'>
            <ArrowDown size={13} className='text-danger' />
            <span className='align-middle ms-25'>20%</span>
          </Badge>
        </div>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type='line' height={400} />
      </CardBody>
    </Card>
  )
}

export default ApexLineChart
