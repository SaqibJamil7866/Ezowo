import { useContext, useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import { useSkin } from '@hooks/useSkin'
import CardAppDesign from '@src/views/ui-elements/cards/advance/CardAppDesign'
import Customers from '@src/views/ui-elements/cards/analytics/Customers'
import CardEmployeesTasks from '@src/views/ui-elements/cards/advance/CardEmployeesTask'
// import ProjectActivities from '@src/views/apps/project/view/Activities'
import LineChart from '@src/views/charts/chart-js/ChartjsLineChart'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import 'chart.js/auto'
import '@styles/react/libs/flatpickr/flatpickr.scss'

import { getProjectTeamTaskStatus, getProjectTasksCountByStatus } from "../../../../services/Apis"

const Summary = ({team, summary, projectId}) => {

  // const [summary, setSummary] = useState({})
  
  const [teamTaskStatus, setTeamTaskStatus] = useState([])
  const [projectTaskCountByStatus, setProjectTaskCountByStatus] = useState([])
  
  const fetchProjectTeamTaskStatus = () => {
    const params = {
      project_id: projectId
    }
    getProjectTeamTaskStatus(params).then((res) => {
      const result = res.response
      if (
        result &&
        (result.code === 200 || result.code === 400) &&
        result.data
      ) {
        setTeamTaskStatus(result.data)
      }
    })
  }

  const fetchProjectTasksCountByStatus = () => {
    const params = {
      project_id: projectId
    }
    getProjectTasksCountByStatus(params).then((res) => {
      const result = res.response
      if (
        result &&
        (result.code === 200 || result.code === 400) &&
        result.data
      ) {
        setProjectTaskCountByStatus(result.data)
      }
    })
  }

  useEffect(() => {
    // fetchProjectSummary()
    fetchProjectTeamTaskStatus()
    fetchProjectTasksCountByStatus()
  }, [])
  

  // ** Context, Hooks & Vars
  const context = useContext(ThemeColors)
  const { colors } = useContext(ThemeColors)
  const trackBgColor = '#e9ecef'

  const { skin } = useSkin(),
  labelColor = skin === 'dark' ? '#b4b7bd' : '#6e6b7b',
  gridLineColor = 'rgba(200, 200, 200, 0.2)',
  lineChartPrimary = '#666ee8',
  lineChartDanger = '#ff4961',
  warningColorShade = '#ffbd1f'
  
  return (
    <>
      <Row className='match-height'>
        <Col lg='4' md='6' xs='12'>
          <CardAppDesign projectData={projectTaskCountByStatus} data={summary} teamData={team} />
        </Col>
        <Col lg='8' md='8' xs='12'>
          <LineChart 
            labelColor={labelColor}
            gridLineColor={gridLineColor}
            lineChartDanger={lineChartDanger}
            lineChartPrimary={lineChartPrimary}
            warningColorShade={warningColorShade} />
        </Col>
      </Row>  
      <Row className='match-height'>
        <Col lg='8' md='8' sm='12'>
          <Customers
            cdata={projectTaskCountByStatus}
            primary={context.colors.primary.main}
            warning={context.colors.warning.main}
            danger={context.colors.danger.main}
            secondary={context.colors.secondary.main}
            success={context.colors.success.main}
            info={context.colors.info.main}
            dark={context.colors.dark.main}
          />
        </Col>
        <Col lg='4' md='6' sm='12'>
          <CardEmployeesTasks colors={colors} data={teamTaskStatus} trackBgColor={trackBgColor} />
        </Col>
        {/* <Col lg='4' md='6' sm='12'>
          <Card>
            <CardHeader>
              <CardTitle tag='h4'>EMPTY</CardTitle>
            </CardHeader>
            <CardBody className='pt-1' style={{maxHeight: '500px', height: 'calc(100% - 4.45rem) !important', overflowY: 'scroll'}}>
              <ProjectActivities projectId={projectId} />
            </CardBody>
          </Card>
        </Col> */}
        
      </Row>  
    </>
  )
}

export default Summary
