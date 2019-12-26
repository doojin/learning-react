import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../router/history'
import { fetchArticles } from '../store/actions/fetchArticles'
import ArticleList from './ArticleList'
import ArticleForm from './ArticleForm'
import Loading from './Loading'
import Error from './Error'

const mapStateToProps = state => ({
  loadingMessage: state.notifications.loading.message,
  errorMessage: state.notifications.error.message
})

export class App extends React.Component {
  componentDidMount () {
    this.props.fetchArticles()
  }

  render () {
    const loadingMessage = this.props.loadingMessage && <Loading message={ this.props.loadingMessage } />
    const errorMessage = this.props.errorMessage && <Error message={ this.props.errorMessage } />

    return (
      <Router history={ history }>
        { errorMessage }
        { loadingMessage }
        <Switch>
          <Route exact path="/" component={ ArticleList } />
          <Route exact path="/create" component={ ArticleForm } />
        </Switch>
      </Router>
    )
  }
}

App.propTypes = {
  fetchArticles: PropTypes.func,
  loadingMessage: PropTypes.string,
  errorMessage: PropTypes.string
}

export default connect(mapStateToProps, { fetchArticles })(App)
