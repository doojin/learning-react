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

  test('dispatches REMOVE_NOTIFICATION event after timeout', () => {
    displayNotification(notification, 2000)(dispatch)

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
