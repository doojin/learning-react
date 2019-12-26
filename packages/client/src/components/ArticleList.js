import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Article from './Article'

const mapStateToProps = state => ({
  articles: state.articleList.articles
})

export const ArticleList = props => (
  <div>
    <Link to="/create" className="btn btn-primary mt-3 mb-4">
      Create New Article
    </Link>

    <ul className="p-0">
      {
        props.articles.map(article => (
          <Article
            key={ article.id }
            title={ article.title }
            text={ article.text } />
        ))
      }
    </ul>
  </div>
)

ArticleList.propTypes = {
  articles: PropTypes.array
}

export default connect(mapStateToProps)(ArticleList)
