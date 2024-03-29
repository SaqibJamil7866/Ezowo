// ** Third Party Components
import Proptypes from 'prop-types'
import classnames from 'classnames'
import { useDispatch } from 'react-redux'


const AnnouncementLine = props => {
  // ** Props
  const { data, tag, className } = props
  const dispatch = useDispatch();

  // ** Custom Tagg
  const Tag = tag ? tag : 'ul'

  return (
    <Tag
      className={classnames('timeline', {
        [className]: className
      })}
    >
      {data.map((item, i) => {
        const ItemTag = item.tag ? item.tag : 'li'

        return (
          <ItemTag
            key={i}
            className={classnames('timeline-item', {
              [item.className]: className
            })}
          >
            <span
              className={classnames('timeline-point', {
                [`timeline-point-${item.color}`]: item.color,
                'timeline-point-indicator': !item.icon
              })}
            >
              {item.icon ? item.icon : null}
            </span>
            <div className='timeline-event'>
              <div
                className={classnames('d-flex justify-content-between flex-sm-row flex-column', {
                  'mb-sm-0 mb-1': item.meta
                })}
              >
                <h6 className='link-primary pointer' onClick={()=>dispatch({type:'home/setAnnouncementModalState', payload:{isOpen: true, ...item}})}>{item.title}</h6>
                {item.meta ? (
                  <span
                    className={classnames('timeline-event-time', {
                      [item.metaClassName]: item.metaClassName
                    })}
                  >
                    {item.meta} {item.timeAgo}
                  </span>
                ) : null}
              </div>
              {item.content ? <p
                style={{background: '#f4e8e8'}}
                className={classnames('p-1', {
                  'mb-0': i === data.length - 1 && !item.customContent
                })}
              >
                {item.content}
              </p> : null}
              {item.customContent ? item.customContent : null}
            </div>
          </ItemTag>
        )
      })}
    </Tag>
  )
}

export default AnnouncementLine

// ** PropTypes
AnnouncementLine.propTypes = {
  tag: Proptypes.string,
  className: Proptypes.string,
  data: Proptypes.array.isRequired
}
