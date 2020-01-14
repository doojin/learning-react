export const CREATE_NOTIFICATION = 'CREATE_NOTIFICATION'

export const displayNotification = notification => {
  return dispatch => {
    dispatch(createNotification(notification))
    setTimeout(() => dispatch(removeNotification(notification)), notification.duration || 3000)
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
