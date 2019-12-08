import React from 'react'
import PropTypes from 'prop-types'

class Article extends React.Component {
  render () {
    return (
      <div className="card mb-3">
        <h5 className="card-header">
          { this.props.title }
        </h5>
        <div className="card-body">
          <div className="card-text">
            { this.props.text }
          </div>
        </div>
      </div>
    )
  }
}

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

export default Article
