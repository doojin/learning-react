import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  updateTitle,
  updateText,
  createArticle
} from '../store/actions/articleForm'
import { Link } from 'react-router-dom'

const mapStateToProps = state => ({
  title: state.articleForm.formData.title,
  text: state.articleForm.formData.text,
  locked: state.articleForm.locked
})

export class ArticleForm extends React.Component {
  render () {
    const disabledValue = this.props.locked ? true : false

    return (
      <form onSubmit={ this.onFormSubmit } className="mt-3 mb-5">
        <div className="form-group">
          <input
            value={ this.props.title }
            onChange={ this.handleTitleChange }
            type="text"
            className="form-control"
            placeholder="Article Title"
            disabled={ disabledValue } />
          <small className="form-text text-muted">Pick up an article headline</small>
        </div>

        <div className="form-group">
          <textarea
            value={ this.props.text }
            onChange={ this.handleTextChange }
            className="form-control"
            placeholder="Article Text"
            disabled={ disabledValue } />
          <small className="form-text text-muted">Write your article here</small>
        </div>

        <Link to="/" className="btn btn-primary mr-3">Go Back</Link>
        <button type="submit"
          className="btn btn-primary"
          disabled={ disabledValue }>
          Create Article
        </button>
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
  locked: PropTypes.bool,
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
