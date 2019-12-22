import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  updateTitle,
  updateText,
  createArticle
} from '../store/actions/articleForm'

const mapStateToProps = state => ({
  title: state.articleForm.title,
  text: state.articleForm.text
})

export class ArticleForm extends React.Component {
  render () {
    return (
      <form onSubmit={ this.onFormSubmit } className="mt-3 mb-5">
        <div className="form-group">
          <input
            value={ this.props.title }
            onChange={ this.handleTitleChange }
            type="text"
            className="form-control"
            placeholder="Article Title" />
          <small className="form-text text-muted">Pick up an article headline</small>
        </div>

        <div className="form-group">
          <textarea
            value={ this.props.text }
            onChange={ this.handleTextChange }
            className="form-control"
            placeholder="Article Text" />
          <small className="form-text text-muted">Write your article here</small>
        </div>

        <button type="submit" className="btn btn-primary">Create Article</button>
      </form>
    )
  }

  handleTitleChange = event => {
    this.props.updateTitle(event.target.value)
  }

  handleTextChange = event => {
    this.props.updateText(event.target.value)
  }

  onFormSubmit = event => {
    event.preventDefault()

    this.props.createArticle({
      title: this.props.title,
      text: this.props.text
    })
  }
}

ArticleForm.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  updateTitle: PropTypes.func,
  updateText: PropTypes.func,
  createArticle: PropTypes.func
}

export default connect(
  mapStateToProps, {
    updateTitle,
    updateText,
    createArticle
  })(ArticleForm)
