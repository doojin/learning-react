import {
  CREATE_NOTIFICATION,
  REMOVE_NOTIFICATION,

  createNotification,
  removeNotification
} from './notifications'

describe('CREATE_NOTIFICATION action creator', () => {
  test('creates correct action object', () => {
    const notification = {}

    const action = createNotification(notification)

    expect(action).toEqual({
      type: CREATE_NOTIFICATION,
      payload: notification
    })
  })
})

describe('REMOVE_NOTIFICATION action creator', () => {
  test('creates correct action object', () => {
    const action = removeNotification()

    expect(action).toEqual({
      type: REMOVE_NOTIFICATION
    })
  })
})
