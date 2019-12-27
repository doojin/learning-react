import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Article from './Article'
import ArticlesLoad from './ArticlesLoad'
import Error from './Error'

const mapStateToProps = state => ({
  ...state.articleList
})

export const ArticleList = props => {
  const placeholderComponent = props.isLoading && <ArticlesLoad />
  const errorComponent = props.loadError && <Error message={ props.loadError } />

  return (
    <div>
      <Link to="/create" className="btn btn-primary mt-3 mb-4">
        Create New Article
      </Link>

      { errorComponent }
      { placeholderComponent }

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
}

ArticleList.propTypes = {
  articles: PropTypes.array,
  isLoading: PropTypes.bool,
  loadError: PropTypes.string
}

export default connect(mapStateToProps)(ArticleList)
