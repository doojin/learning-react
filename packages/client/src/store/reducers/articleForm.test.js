import {
  ARTICLE_CREATION_SUCCESS,
  ARTICLE_CREATION_FAILURE
} from '../actions/createArticle'
import articleForm from './articleForm'

describe('article form reducer', () => {
  let action
  let state

  beforeEach(() => {
    state = {}
  })

  describe('article creation success event', () => {
    beforeEach(() => {
      action = {
        type: ARTICLE_CREATION_SUCCESS
      }
    })

    test('clears title property', () => {
      state.title = 'test title'

      const updated = articleForm(state, action)

      expect(updated.title).toBeNull()
    })

    test('clears text property', () => {
      state.text = 'test text'

      const updated = articleForm(state, action)

      expect(updated.text).toBeNull()
    })
  })

  describe('article creation failure event', () => {
    beforeEach(() => {
      action = {
        type: ARTICLE_CREATION_FAILURE
      }
    })

    test('clears title property', () => {
      state.title = 'test title'

      const updated = articleForm(state, action)

      expect(updated.title).toBeNull()
    })

    test('clears text property', () => {
      state.text = 'test text'

      const updated = articleForm(state, action)

      expect(updated.text).toBeNull()
    })
  })
})
