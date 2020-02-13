import {
  ARTICLE_CREATION_SUCCESS,
  ARTICLE_CREATION_FAILURE,
  UPDATE_TITLE,
  UPDATE_TEXT,
  ARTICLE_CREATION_STARTED
} from '../actions/articleForm'
import articleForm from './articleForm'

describe('article form reducer', () => {
  let action
  let state

  beforeEach(() => {
    state = {}
  })

  describe('article creation success action', () => {
    beforeEach(() => {
      action = {
        type: ARTICLE_CREATION_SUCCESS
      }
    })

    test('clears title property', () => {
      state.title = 'test title'

      const updated = articleForm(state, action)

      expect(updated.formData.title).toEqual('')
    })

    test('clears text property', () => {
      state.text = 'test text'

      const updated = articleForm(state, action)

      expect(updated.formData.text).toEqual('')
    })

    test('unlocks the form', () => {
      state.locked = true

      const updated = articleForm(state, action)

      expect(updated.locked).toBe(false)
    })
  })

  describe('article creation failure action', () => {
    beforeEach(() => {
      action = {
        type: ARTICLE_CREATION_FAILURE
      }
    })

    test('clears title property', () => {
      state.title = 'test title'

      const updated = articleForm(state, action)

      expect(updated.formData.title).toEqual('')
    })

    test('clears text property', () => {
      state.text = 'test text'

      const updated = articleForm(state, action)

      expect(updated.formData.text).toEqual('')
    })

    test('unlocks the form', () => {
      state.locked = true

      const updated = articleForm(state, action)

      expect(updated.locked).toBe(false)
    })
  })

  describe('title update action', () => {
    beforeEach(() => {
      action = {
        type: UPDATE_TITLE,
        payload: 'test title'
      }
    })

    test('updates title property', () => {
      const updated = articleForm(state, action)

      expect(updated).toEqual({
        formData: {
          title: 'test title'
        }
      })
    })
  })

  describe('text update action', () => {
    beforeEach(() => {
      action = {
        type: UPDATE_TEXT,
        payload: 'test text'
      }
    })

    test('updates text property', () => {
      const updated = articleForm(state, action)

      expect(updated).toEqual({
        formData: {
          text: 'test text'
        }
      })
    })
  })

  describe('article creation started action', () => {
    beforeEach(() => {
      action = {
        type: ARTICLE_CREATION_STARTED
      }
    })

    test('locks form', () => {
      state.locked = false

      const updated = articleForm(state, action)

      expect(updated.locked).toBe(true)
    })
  })
})
