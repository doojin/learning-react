import notificationsReducer from './notifications'
import {
  SHOW_LOADING_MESSAGE,
  HIDE_LOADING_MESSAGE,
  SHOW_ERROR_MESSAGE,
  HIDE_ERROR_MESSAGE
} from '../actions/notifications'

describe('notifications reducer', () => {
  let action
  let state

  beforeEach(() => {
    action = {}
    state = {
      loading: {},
      error: {}
    }
  })

  describe('action type is SHOW_LOADING_MESSAGE', () => {
    beforeEach(() => {
      action.type = SHOW_LOADING_MESSAGE
    })

    test('sets loading message', () => {
      action.payload = 'test message'

      const updated = notificationsReducer(state, action)

      expect(updated.loading.message).toEqual('test message')
    })
  })

  describe('action type is HIDE_LOADING_MESSAGE', () => {
    beforeEach(() => {
      action.type = HIDE_LOADING_MESSAGE
    })

    test('removes loading message', () => {
      state.loading.message = 'test message'

      const updated = notificationsReducer(state, action)

      expect(updated.loading.message).toEqual('')
    })
  })

  describe('action type is SHOW_ERROR_MESSAGE', () => {
    beforeEach(() => {
      action.type = SHOW_ERROR_MESSAGE
    })

    test('sets error message', () => {
      action.payload = 'test error'

      const updated = notificationsReducer(state, action)

      expect(updated.error.message).toEqual('test error')
    })
  })

  describe('action type is HIDE_ERROR_MESSAGE', () => {
    beforeEach(() => {
      action.type = HIDE_ERROR_MESSAGE
    })

    test('removes error message', () => {
      state.error.message = 'test error'

      const updated = notificationsReducer(state, action)

      expect(updated.error.message).toEqual('')
    })
  })
})
