import Avatar from '@components/avatar'
import { calculateTaskPercentage } from '@utils'
import Chart from 'react-apexcharts'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const CardEmployeesTasks = ({ colors, data, trackBgColor }) => {

  const employeesTasks = data.map((item) => {
    return { ...item, 
      avatar: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
      title: item.name, 
      subtitle: 'iOS Developer', 
      time: `${calculateTaskPercentage(item.status.todo, item.status.completed).toString()}%`, 
      chart: {
        type: 'radialBar',
        series: [calculateTaskPercentage(item.status.todo, item.status.completed)],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [colors.primary.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
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
    }
  })
  // const employeesTasks = [
  //   {
  //     avatar: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
  //     title: 'Ryan Harrington',
  //     subtitle: 'iOS Developer',
  //     time: '90%',
  //     chart: {
  //       type: 'radialBar',
  //       series: [90],
  //       height: 30,
  //       width: 30,
  //       options: {
  //         grid: {
  //           show: false,
  //           padding: {
  //             left: -15,
  //             right: -15,
  //             top: -12,
  //             bottom: -15
  //           }
  //         },
  //         colors: [colors.primary.main],
  //         plotOptions: {
  //           radialBar: {
  //             hollow: {
  //               size: '22%'
  //             },
  //             track: {
  //               background: trackBgColor
  //             },
  //             dataLabels: {
  //               showOn: 'always',
  //               name: {
  //                 show: false
  //               },
  //               value: {
  //                 show: false
  //               }
  //             }
  //           }
  //         },
  //         stroke: {
  //           lineCap: 'round'
  //         }
  //       }
  //     }
  //   },
  //   {
  //     avatar: require('@src/assets/images/portrait/small/avatar-s-20.jpg').default,
  //     title: 'Louisa Norton',
  //     subtitle: 'UI Designer',
  //     time: '40%',
  //     chart: {
  //       type: 'radialBar',
  //       series: [65],
  //       height: 30,
  //       width: 30,
  //       options: {
  //         grid: {
  //           show: false,
  //           padding: {
  //             left: -15,
  //             right: -15,
  //             top: -12,
  //             bottom: -15
  //           }
  //         },
  //         colors: [colors.danger.main],
  //         plotOptions: {
  //           radialBar: {
  //             hollow: {
  //               size: '22%'
  //             },
  //             track: {
  //               background: trackBgColor
  //             },
  //             dataLabels: {
  //               showOn: 'always',
  //               name: {
  //                 show: false
  //               },
  //               value: {
  //                 show: false
  //               }
  //             }
  //           }
  //         },
  //         stroke: {
  //           lineCap: 'round'
  //         }
  //       }
  //     }
  //   },
  //   {
  //     avatar: require('@src/assets/images/portrait/small/avatar-s-1.jpg').default,
  //     title: 'Jayden Duncan',
  //     subtitle: 'Java Developer',
  //     time: '12%',
  //     chart: {
  //       type: 'radialBar',
  //       series: [60],
  //       height: 30,
  //       width: 30,
  //       options: {
  //         grid: {
  //           show: false,
  //           padding: {
  //             left: -15,
  //             right: -15,
  //             top: -12,
  //             bottom: -15
  //           }
  //         },
  //         colors: [colors.success.main],
  //         plotOptions: {
  //           radialBar: {
  //             hollow: {
  //               size: '22%'
  //             },
  //             track: {
  //               background: trackBgColor
  //             },
  //             dataLabels: {
  //               showOn: 'always',
  //               name: {
  //                 show: false
  //               },
  //               value: {
  //                 show: false
  //               }
  //             }
  //           }
  //         },
  //         stroke: {
  //           lineCap: 'round'
  //         }
  //       }
  //     }
  //   },
  //   {
  //     avatar: require('@src/assets/images/portrait/small/avatar-s-20.jpg').default,
  //     title: 'Cynthia Howell',
  //     subtitle: 'Angular Developer',
  //     time: '30%',
  //     chart: {
  //       type: 'radialBar',
  //       series: [35],
  //       height: 30,
  //       width: 30,
  //       options: {
  //         grid: {
  //           show: false,
  //           padding: {
  //             left: -15,
  //             right: -15,
  //             top: -12,
  //             bottom: -15
  //           }
  //         },
  //         colors: [colors.secondary.main],
  //         plotOptions: {
  //           radialBar: {
  //             hollow: {
  //               size: '22%'
  //             },
  //             track: {
  //               background: trackBgColor
  //             },
  //             dataLabels: {
  //               showOn: 'always',
  //               name: {
  //                 show: false
  //               },
  //               value: {
  //                 show: false
  //               }
  //             }
  //           }
  //         },
  //         stroke: {
  //           lineCap: 'round'
  //         }
  //       }
  //     }
  //   },
  //   {
  //     avatar: require('@src/assets/images/portrait/small/avatar-s-16.jpg').default,
  //     title: 'Helena Payne',
  //     subtitle: 'Marketing',
  //     time: '20%',
  //     chart: {
  //       type: 'radialBar',
  //       series: [65],
  //       height: 30,
  //       width: 30,
  //       options: {
  //         grid: {
  //           show: false,
  //           padding: {
  //             left: -15,
  //             right: -15,
  //             top: -12,
  //             bottom: -15
  //           }
  //         },
  //         colors: [colors.warning.main],
  //         plotOptions: {
  //           radialBar: {
  //             hollow: {
  //               size: '22%'
  //             },
  //             track: {
  //               background: trackBgColor
  //             },
  //             dataLabels: {
  //               showOn: 'always',
  //               name: {
  //                 show: false
  //               },
  //               value: {
  //                 show: false
  //               }
  //             }
  //           }
  //         },
  //         stroke: {
  //           lineCap: 'round'
  //         }
  //       }
  //     }
  //   },
  //   {
  //     avatar: require('@src/assets/images/portrait/small/avatar-s-13.jpg').default,
  //     title: 'Troy Jensen',
  //     subtitle: 'iOS Developer',
  //     time: '90%',
  //     chart: {
  //       type: 'radialBar',
  //       series: [80],
  //       height: 30,
  //       width: 30,
  //       options: {
  //         grid: {
  //           show: false,
  //           padding: {
  //             left: -15,
  //             right: -15,
  //             top: -12,
  //             bottom: -15
  //           }
  //         },
  //         colors: [colors.primary.main],
  //         plotOptions: {
  //           radialBar: {
  //             hollow: {
  //               size: '22%'
  //             },
  //             track: {
  //               background: trackBgColor
  //             },
  //             dataLabels: {
  //               showOn: 'always',
  //               name: {
  //                 show: false
  //               },
  //               value: {
  //                 show: false
  //               }
  //             }
  //           }
  //         },
  //         stroke: {
  //           lineCap: 'round'
  //         }
  //       }
  //     }
  //   }
  // ]

  const renderTasks = () => {
    if (!employeesTasks || !employeesTasks.length) {
      return (<div className='employee-task d-flex justify-content-between align-items-center'>No Tasks found.</div>)
    } else {
      return employeesTasks.map(task => {
        return (
          <div key={task.title} className='employee-task d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
              <Avatar imgClassName='rounded' className='me-75' img={task.avatar} imgHeight='42' imgWidth='42' />
              <div className='my-auto'>
                <h6 className='mb-0'>{task.title}</h6>
                <small>{task.subtitle}</small>
              </div>
            </div>
            <div className='d-flex align-items-center'>
              <small className='text-muted me-75'>{task.time}</small>
              <Chart
                options={task.chart.options}
                series={task.chart.series}
                type={task.chart.type}
                height={task.chart.height}
                width={task.chart.width}
              />
            </div>
          </div>
        )
      })
    }

  }

  return (
    <Card className='card-employee-task'>
      <CardHeader>
        <CardTitle tag='h4'>Team Tasks Status</CardTitle>
        {/* <MoreVertical size={18} className='cursor-pointer' /> */}
      </CardHeader>
      <CardBody>{renderTasks()}</CardBody>
    </Card>
  )
}

export default CardEmployeesTasks
