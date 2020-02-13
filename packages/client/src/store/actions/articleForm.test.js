jest.mock('axios')
jest.mock('delay')
jest.mock('../../router/history')
jest.mock('./fetchArticles')
jest.mock('./notifications')

import axios from 'axios'
import {
  ARTICLE_CREATION_STARTED,
  ARTICLE_CREATION_SUCCESS,
  ARTICLE_CREATION_FAILURE,
  createArticle
} from './articleForm'
import { displayNotification } from './notifications'

describe('create article action', () => {
  let article
  let dispatch

  beforeEach(() => {
    article = {}
    dispatch = jest.fn()
  })

  test('dispatches article creation start action', async () => {
    await createArticle(article)(dispatch)

    expect(dispatch).toHaveBeenCalledWith({ type: ARTICLE_CREATION_STARTED })
  })

  test('executes correct HTTP request', async () => {
    await createArticle(article)(dispatch)

    expect(axios.post).toHaveBeenCalledWith('/articles', article)
  })

  describe('article creation successful', () => {
    test('dispatches article creation success action', async () => {
      await createArticle(article)(dispatch)

      expect(dispatch).toHaveBeenCalledWith({ type: ARTICLE_CREATION_SUCCESS })
    })

    test('not dispatches article creation failure action', async () => {
      await createArticle(article)(dispatch)

      expect(dispatch).not.toHaveBeenCalledWith({ type: ARTICLE_CREATION_FAILURE })
    })

    test('shows success message', async () => {
      await createArticle(article)(dispatch)

      expect(displayNotification).toHaveBeenCalledWith({
        type: 'success',
        text: 'Your arcticle have been created'
      })
    })
  })

  describe('article creation fails', () => {
    beforeEach(() => {
      axios.post.mockRejectedValue(new Error('test error'))
    })

    test('dispatches article creation failure action', async () => {
      await createArticle(article)(dispatch)

      expect(dispatch).toHaveBeenCalledWith({ type: ARTICLE_CREATION_FAILURE })
    })

    test('not dispatches article creation failure action', async () => {
      await createArticle(article)(dispatch)

      expect(dispatch).not.toHaveBeenCalledWith({ type: ARTICLE_CREATION_SUCCESS })
    })

    test('shows error message', async () => {
      await createArticle(article)(dispatch)

      expect(displayNotification).toHaveBeenCalledWith({
        type: 'danger',
        text: 'test error'
      })
    })
  })
})
