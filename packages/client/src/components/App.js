import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { fetchArticles } from '../store/actions/fetchArticles'
import ArticleList from './ArticleList'
import ArticleForm from './ArticleForm'

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  loadError: state.loadError
})

export class App extends React.Component {
  componentDidMount () {
    this.props.fetchArticles()
  }

  render () {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={ ArticleList } />
          <Route exact path="/create" component={ ArticleForm } />
        </Switch>
      </HashRouter>
    )
  }
}

App.propTypes = {
  fetchArticles: PropTypes.func,
  isLoading: PropTypes.bool,
  loadError: PropTypes.string
}

export default connect(mapStateToProps, { fetchArticles })(App)
