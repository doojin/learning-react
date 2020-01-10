export const CREATE_NOTIFICATION = 'CREATE_NOTIFICATION'

export const createNotification = notification => ({
  type: CREATE_NOTIFICATION,
  payload: notification
})

export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'

export const removeNotification = notification => ({
  type: REMOVE_NOTIFICATION,
  payload: notification
})
