import {
  SHOW_LOADING_MESSAGE,
  HIDE_LOADING_MESSAGE,
  SHOW_ERROR_MESSAGE,
  HIDE_ERROR_MESSAGE,

  showLoadingMessage,
  hideLoadingMessage,
  showErrorMessage,
  hideErrorMessage
} from './notifications'

describe('notification actions', () => {
  let dispatch

  beforeEach(() => {
    dispatch = jest.fn()
  })

  describe('showLoadingMessage', () => {
    test('dispatches correct action object', () => {
      showLoadingMessage('test message')(dispatch)

      expect(dispatch).toHaveBeenCalledWith({
        type: SHOW_LOADING_MESSAGE,
        payload: 'test message'
      })
    })
  })

  describe('hideLoadingMessage', () => {
    test('dispatches correct action object', () => {
      hideLoadingMessage()(dispatch)

      expect(dispatch).toHaveBeenCalledWith({
        type: HIDE_LOADING_MESSAGE
      })
    })
  })

  describe('showErrorMessage', () => {
    test('dispatches correct action object', () => {
      showErrorMessage('test error')(dispatch)

      expect(dispatch).toHaveBeenCalledWith({
        type: SHOW_ERROR_MESSAGE,
        payload: 'test error'
      })
    })
  })

  describe('hideErrorMessage', () => {
    test('dispatches correct action object', () => {
      hideErrorMessage()(dispatch)

      expect(dispatch).toHaveBeenCalledWith({
        type: HIDE_ERROR_MESSAGE
      })
    })
  })
})
