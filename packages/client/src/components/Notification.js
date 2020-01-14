import React from 'react'
import PropTypes from 'prop-types'
import './Notification.scss'

class Notification extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      hidden: false
    }
  }

  componentDidMount () {
    if (this.props.duration) {
      const animationTime = 300
      const timeout = this.props.duration - animationTime

      setTimeout(() => this.hide(), timeout)
    }
  }

  render () {
    const classNames = ['notification', 'alert', this.containerClassName]

    if (this.state.hidden) {
      classNames.push('notification--hidden')
    }

    return (
      <div className={ classNames.join(' ') }>
        { this.props.text }
      </div>
    )
  }

  hide () {
    this.setState(
      Object.assign({}, this.state, {
        hidden: true
      }))
  }

  get containerClassName () {
    return `alert-${this.props.type}`
  }
}

Notification.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  duration: PropTypes.number
}

Notification.type = {
  ERROR: 'danger',
  INFO: 'info',
  SUCCESS: 'success'
}

export default Notification
