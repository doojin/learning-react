import React from 'react'
import PropTypes from 'prop-types'

class Loading extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      dotsCount: 0
    }

    const maxDotsCount = this.props.maxDots || 3
    const dotsIncreaseInterval = 150

    this.interval = setInterval(() => {
      const dotsCount = this.state.dotsCount + 1

      this.setState(Object.assign({}, this.state, {
        dotsCount: dotsCount > maxDotsCount ? 0 : dotsCount
      }))
    }, dotsIncreaseInterval)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    return (
      <div className="alert alert-primary">
        {this.props.message}
        {'.'.repeat(this.state.dotsCount)}
      </div>
    )
  }
}

Loading.propTypes = {
  maxDots: PropTypes.number,
  message: PropTypes.string
}

export default Loading
