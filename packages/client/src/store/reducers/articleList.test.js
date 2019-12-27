import reducer from './articleList'

describe('article list reducer', () => {
  let state
  let action

  beforeEach(() => {
    state = {}
    action = {}
  })

  describe('FETCH_ARTICLES_STARTED action', () => {
    beforeEach(() => {
      action.type = 'FETCH_ARTICLES_STARTED'
    })

    test('sets isLoading property to true', () => {
      const updatedState = reducer(state, action)

      expect(updatedState.isLoading).toBe(true)
    })

    test('cleans error property', () => {
      state.loadError = 'test error'

      const updatedState = reducer(state, action)

      expect(updatedState.loadError).toEqual('')
    })
  })

  describe('FETCH_ARTICLES_SUCCESS action', () => {
    beforeEach(() => {
      action.type = 'FETCH_ARTICLES_SUCCESS'
      action.payload = [
        { title: 'test article' }
      ]
    })

    test('sets isLoading property to false', () => {
      state.isLoading = true

      const updatedState = reducer(state, action)

      expect(updatedState.isLoading).toBe(false)
    })

    test('cleans error property', () => {
      state.loadError = 'test error'

      const updatedState = reducer(state, action)

      expect(updatedState.loadError).toEqual('')
    })

    test('sets articles property', () => {
      const updatedState = reducer(state, action)

      expect(updatedState.articles).toEqual(action.payload)
    })
  })

  describe('FETCH_ARTICLES_FAILURE action', () => {
    beforeEach(() => {
      action.type = 'FETCH_ARTICLES_FAILURE'
      action.payload = 'test error'
    })

    test('sets isLoading property to false', () => {
      state.isLoading = true

      const updatedState = reducer(state, action)

      expect(updatedState.isLoading).toBe(false)
    })

    test('sets loadError property', () => {
      const updatedState = reducer(state, action)

      expect(updatedState.loadError).toEqual('test error')
    })
  })
})
