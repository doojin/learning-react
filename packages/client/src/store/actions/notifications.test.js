import {
  CREATE_NOTIFICATION,
  REMOVE_NOTIFICATION,
  displayNotification
} from './notifications'

jest.useFakeTimers()

describe('displayNotification', () => {
  let notification
  let dispatch

  beforeEach(() => {
    notification = {
      text: 'test notification',
      type: 'error'
    }

    dispatch = jest.fn()
  })

  test('dispatches CREATE_NOTIFICATION event', () => {
    displayNotification(notification)(dispatch)

    expect(dispatch).toHaveBeenCalledWith({
      type: CREATE_NOTIFICATION,
      payload: notification
    })
  })

  describe('notification duration is set', () => {
    beforeEach(() => {
      notification = { duration: 2000 }
    })

    test('dispatches REMOVE_NOTIFICATION event after duration passed', () => {
      displayNotification(notification)(dispatch)

      jest.advanceTimersByTime(1999)

      expect(dispatch).not.toHaveBeenCalledWith({
        type: REMOVE_NOTIFICATION,
        payload: notification
      })

      jest.advanceTimersByTime(1)

      expect(dispatch).toHaveBeenCalledWith({
        type: REMOVE_NOTIFICATION,
        payload: notification
      })
    })
  })

  describe('notification duration not set', () => {
    beforeEach(() => {
      notification = {}
    })

    test('dispatches REMOVE_NOTIFICATION event after the default duration passed', () => {
      displayNotification(notification)(dispatch)

      jest.advanceTimersByTime(2999)

      expect(dispatch).not.toHaveBeenCalledWith({
        type: REMOVE_NOTIFICATION,
        payload: notification
      })

      jest.advanceTimersByTime(1)

      expect(dispatch).toHaveBeenCalledWith({
        type: REMOVE_NOTIFICATION,
        payload: notification
      })
    })
  })
})
