import React from 'react'
import './ArticlePlaceholder.scss'

class ArticlePlaceholder extends React.Component {
  render () {
    return (
      <div className="articlePlaceholder">
        <div className="articlePlaceholder__block articlePlaceholder__block--big" />
        <div className="articlePlaceholder__block articlePlaceholder__block--medium" />
        <div className="articlePlaceholder__block articlePlaceholder__block--small" />
      </div>
    )
  }
}

export default ArticlePlaceholder
