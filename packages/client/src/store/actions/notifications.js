export const CREATE_NOTIFICATION = 'CREATE_NOTIFICATION'

export const displayNotification = (notification, duration = 3000) => {
  return dispatch => {
    dispatch(createNotification(notification))
    setTimeout(() => dispatch(removeNotification(notification)), duration)
  }
}

const createNotification = notification => ({
  type: CREATE_NOTIFICATION,
  payload: notification
})

export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'

const removeNotification = notification => ({
  type: REMOVE_NOTIFICATION,
  payload: notification
})
