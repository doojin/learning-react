import {
  SHOW_LOADING_MESSAGE,
  HIDE_LOADING_MESSAGE,
  SHOW_ERROR_MESSAGE,
  HIDE_ERROR_MESSAGE
} from '../actions/notifications'

const initialState = {
  loading: {
    message: ''
  },
  error: {
    message: ''
  }
}

const setLoadingMessage = (state, message) => setMessage(state, 'loading', message)
const setErrorMessage = (state, message) => setMessage(state, 'error', message)

const setMessage = (state, prop, message) => Object.assign({}, state, {
  [prop]: {
    ...state[prop],
    message
  }
})

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADING_MESSAGE:
      return setLoadingMessage(state, action.payload)

    case HIDE_LOADING_MESSAGE:
      return setLoadingMessage(state, '')

    case SHOW_ERROR_MESSAGE:
      return setErrorMessage(state, action.payload)

    case HIDE_ERROR_MESSAGE:
      return setErrorMessage(state, '')

    default:
      return state
  }
}
