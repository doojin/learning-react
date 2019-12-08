import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchArticles } from '../store/actions/fetch-articles'
import ArticleList from './ArticleList'
import Loading from './Loading'
import Error from './Error'

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  loadError: state.loadError
})

export class App extends React.Component {
  componentDidMount () {
    this.props.fetchArticles()
  }

  render () {
    const error = this.props.loadError
      ? <Error message={ this.props.loadError.message } />
      : null

    const body = this.props.isLoading
      ? <Loading message="Your articles are loading" />
      : <ArticleList/>

    return (
      <div>
        { error }
        { body }
      </div>
    )
  }
}

App.propTypes = {
  fetchArticles: PropTypes.func,
  isLoading: PropTypes.bool,
  loadError: PropTypes.string
}

export default connect(mapStateToProps, { fetchArticles })(App)
