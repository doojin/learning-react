import {
  CREATE_NOTIFICATION,
  REMOVE_NOTIFICATION
} from '../actions/notifications'

const initialState = {
  notifications: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NOTIFICATION:
      return Object.assign({}, state, {
        notifications: [...state.notifications, action.payload]
      })

    case REMOVE_NOTIFICATION:
      return Object.assign({}, state, {
        notifications: state.notifications
          .filter(notification => notification !== action.payload)
      })

    default:
      return state
  }
}
