import notificationsReducer from './notifications'
import {
  CREATE_NOTIFICATION,
  REMOVE_NOTIFICATION
} from '../actions/notifications'

describe('notifications reducer', () => {
  let action
  let state

  beforeEach(() => {
    action = {}
    state = {
      notifications: []
    }
  })

  describe('action type is CREATE_NOTIFICATION', () => {
    beforeEach(() => {
      action.type = CREATE_NOTIFICATION
    })

    test('adds notification', () => {
      action.payload = 'test notification'

      const updated = notificationsReducer(state, action)

      expect(updated.notifications).toEqual(['test notification'])
    })
  })

  describe('action type is REMOVE_NOTIFICATION', () => {
    beforeEach(() => {
      action.type = REMOVE_NOTIFICATION
      action.payload = 'test notification'
    })

    test('removes notification', () => {
      state.notifications = ['test notification']

      const updated = notificationsReducer(state, action)

      expect(updated.notifications).toEqual([])
    })
  })
})
