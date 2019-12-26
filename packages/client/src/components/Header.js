import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Loading from './Loading'
import Error from './Error'

const mapStateToProps = state => ({
  loadingMessage: state.notifications.loading.message,
  errorMessage: state.notifications.error.message
})

export class Header extends React.Component {
  render () {
    let loadingNotification
    let errorNotification

    const createNotification = content => (
      <div className="mt-3 mb-3">
        { content }
      </div>
    )

    if (this.props.loadingMessage) {
      loadingNotification = createNotification(<Loading message={ this.props.loadingMessage } />)
    }

    if (this.props.errorMessage) {
      errorNotification = createNotification(<Error message={ this.props.errorMessage } />)
    }

    return (
      <div>
        { errorNotification }
        { loadingNotification }
      </div>
    )
  }
}

Header.propTypes = {
  loadingMessage: PropTypes.string,
  errorMessage: PropTypes.string
}

export default connect(mapStateToProps)(Header)
