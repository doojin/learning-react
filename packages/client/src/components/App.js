import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchArticles } from '../store/actions/fetch-articles'
import ArticleList from './ArticleList'
import Loading from './Loading'

const mapStateToProps = state => ({
  isLoading: state.isLoading
})

export class App extends React.Component {
  componentDidMount () {
    this.props.fetchArticles()
  }

  render () {
    const body = this.props.isLoading
      ? <Loading message="Your articles are loading"/>
      : <ArticleList/>

    return (
      <div>
        {body}
      </div>
    )
  }
}

App.propTypes = {
  fetchArticles: PropTypes.func,
  isLoading: PropTypes.bool
}

export default connect(mapStateToProps, { fetchArticles })(App)
