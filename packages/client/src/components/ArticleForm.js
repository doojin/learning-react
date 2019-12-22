import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

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
            type="text"
            className="form-control"
            placeholder="Article Title" />
          <small className="form-text text-muted">Pick up an article headline</small>
        </div>

        <div className="form-group">
          <textarea
            value={ this.props.text }
            className="form-control"
            placeholder="Article Text" />
          <small className="form-text text-muted">Write your article here</small>
        </div>

        <button type="submit" className="btn btn-primary">Create Article</button>
      </form>
    )
  }

  onFormSubmit (event) {
    event.preventDefault()
  }
}

ArticleForm.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

export default connect(mapStateToProps)(ArticleForm)
