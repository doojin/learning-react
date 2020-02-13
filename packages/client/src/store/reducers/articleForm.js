import {
  ARTICLE_CREATION_STARTED,
  ARTICLE_CREATION_SUCCESS,
  ARTICLE_CREATION_FAILURE,
  UPDATE_TITLE,
  UPDATE_TEXT
} from '../actions/articleForm'

const initialState = {
  formData: {
    title: '',
    text: ''
  },
  locked: false
}

const clearFormData = state => Object.assign({}, state, {
  formData: {
    title: '',
    text: ''
  }
})

export default (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_CREATION_STARTED:
      return Object.assign({}, state, {
        locked: true
      })

    case ARTICLE_CREATION_SUCCESS:
      return Object.assign({}, clearFormData(state), {
        locked: false
      })

    case ARTICLE_CREATION_FAILURE:
      return Object.assign({}, clearFormData(state), {
        locked: false
      })

    case UPDATE_TITLE:
      return Object.assign({}, state, {
        formData: {
          ...state.formData,
          title: action.payload
        }
      })

    case UPDATE_TEXT:
      return Object.assign({}, state, {
        formData: {
          ...state.formData,
          text: action.payload
        }
      })

    default:
      return state
  }
}
