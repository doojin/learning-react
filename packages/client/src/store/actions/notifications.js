export const SHOW_LOADING_MESSAGE = 'SHOW_LOADING_MESSAGE'

export const showLoadingMessage = message => {
  return dispatch => dispatch({
    type: SHOW_LOADING_MESSAGE,
    payload: message
  })
}

export const HIDE_LOADING_MESSAGE = 'HIDE_LOADING_MESSAGE'

export const hideLoadingMessage = () => {
  return dispatch => dispatch({
    type: HIDE_LOADING_MESSAGE
  })
}

export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE'

export const showErrorMessage = message => {
  return dispatch => dispatch({
    type: SHOW_ERROR_MESSAGE,
    payload: message
  })
}

export const HIDE_ERROR_MESSAGE = 'HIDE_ERROR_MESSAGE'

export const hideErrorMessage = () => {
  return dispatch => dispatch({
    type: HIDE_ERROR_MESSAGE
  })
}
