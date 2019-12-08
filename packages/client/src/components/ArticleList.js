import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './Article'

const mapStateToProps = state => ({
  articles: state.articles
})

export const ArticleList = props => (
  <ul>
    {
      props.articles.map(article => (
        <Article
          key={ article.id }
          title={ article.title }
          text={ article.text } />
      ))
    }
  </ul>
)

ArticleList.propTypes = {
  articles: PropTypes.array
}

export default connect(mapStateToProps)(ArticleList)
