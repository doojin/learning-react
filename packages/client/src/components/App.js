import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../router/history'
import { fetchArticles } from '../store/actions/fetchArticles'
import { displayNotification } from '../store/actions/notifications'
import ArticleList from './ArticleList'
import ArticleForm from './ArticleForm'
import Notification from './Notification'

const mapStateToProps = state => ({
  notifications: state.notifications.notifications
})

export class App extends React.Component {
  componentDidMount () {
    this.props.fetchArticles()
  }

  render () {
    return (
      <div>
        {
          this.props.notifications.map((notification, index) =>
            <Notification
              key={ index }
              type={ notification.type }
              text={ notification.text }
              duration={ notification.duration } />)
        }
        <Router history={ history }>
          <Switch>
            <Route exact path="/" component={ ArticleList } />
            <Route exact path="/create" component={ ArticleForm } />
          </Switch>
        </Router>
      </div>
    )
  }
}

App.propTypes = {
  fetchArticles: PropTypes.func,
  displayNotification: PropTypes.func,
  notifications: PropTypes.array
}

export default connect(mapStateToProps, { fetchArticles, displayNotification })(App)
