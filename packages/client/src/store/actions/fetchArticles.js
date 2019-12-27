import axios from 'axios'
import delay from 'delay'

export const FETCH_ARTICLES_STARTED = 'FETCH_ARTICLES_STARTED'
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS'
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE'

const fetchArticlesStarted = () =>
  ({ type: FETCH_ARTICLES_STARTED })

const fetchArticlesSuccess = articles => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: articles
})

const fetchArticlesFailure = error => ({
  type: FETCH_ARTICLES_FAILURE,
  payload: error
})

export function fetchArticles () {
  return async dispatch => {
    dispatch(fetchArticlesStarted())

    try {
      const articles = await axios.get('/articles')
      await delay(3000)
      dispatch(fetchArticlesSuccess(articles.data))
    } catch (e) {
      dispatch(fetchArticlesFailure(e))
    }
  }
}
