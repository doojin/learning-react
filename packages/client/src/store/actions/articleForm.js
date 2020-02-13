import axios from 'axios'
import delay from 'delay'
import history from '../../router/history'
import { fetchArticles } from './fetchArticles'
import { displayNotification } from './notifications'
import Notification from '../../components/Notification'

export const ARTICLE_CREATION_STARTED = 'ARTICLE_CREATION_STARTED'

const articleCreationStarted = () => {
  return { type: ARTICLE_CREATION_STARTED }
}

export const ARTICLE_CREATION_SUCCESS = 'ARTICLE_CREATION_SUCCESS'

const articleCreationSuccess = () => {
  return { type: ARTICLE_CREATION_SUCCESS }
}

export const ARTICLE_CREATION_FAILURE = 'ARTICLE_CREATION_FAILURE'

const articleCreationFailure = () => {
  return { type: ARTICLE_CREATION_FAILURE }
}

const displayArticleCreationSuccessNotification = dispatch => {
  dispatch(displayNotification({
    type: Notification.type.SUCCESS,
    text: 'Your arcticle have been created'
  }))
}

const displayArticleCreationErrorNotification = (dispatch, error) => {
  dispatch(displayNotification({
    type: Notification.type.ERROR,
    text: error
  }))
}

export function createArticle (article) {
  return async dispatch => {
    dispatch(articleCreationStarted())

    try {
      await axios.post('/articles', article)
      await delay(3000)
      dispatch(articleCreationSuccess())
      dispatch(fetchArticles())
      history.push('/')
      displayArticleCreationSuccessNotification(dispatch)
    } catch (e) {
      dispatch(articleCreationFailure())
      displayArticleCreationErrorNotification(dispatch, e.message)
    }
  }
}

export const UPDATE_TITLE = 'UPDATE_TITLE'

export const updateTitle = title => ({
  type: UPDATE_TITLE,
  payload: title
})

export const UPDATE_TEXT = 'UPDATE_TEXT'

export const updateText = text => ({
  type: UPDATE_TEXT,
  payload: text
})
