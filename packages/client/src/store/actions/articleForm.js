import axios from 'axios'

export const ARTICLE_CREATION_STARTED = 'ARTICLE_CREATION_STARTED'
export const ARTICLE_CREATION_SUCCESS = 'ARTICLE_CREATION_SUCCESS'
export const ARTICLE_CREATION_FAILURE = 'ARTICLE_CREATION_FAILURE'

const articleCreationStarted = () => {
  return { type: ARTICLE_CREATION_STARTED }
}

const articleCreationSuccess = () => {
  return { type: ARTICLE_CREATION_SUCCESS }
}

const articleCreationFailure = () => {
  return { type: ARTICLE_CREATION_FAILURE }
}

export function createArticle (article) {
  return async dispatch => {
    dispatch(articleCreationStarted())

    try {
      await axios.post('/articles', article)
      dispatch(articleCreationSuccess())
    } catch (e) {
      dispatch(articleCreationFailure())
    }
  }
}
