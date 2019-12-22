import {
  ARTICLE_CREATION_STARTED,
  ARTICLE_CREATION_SUCCESS,
  ARTICLE_CREATION_FAILURE,
  UPDATE_TITLE,
  UPDATE_TEXT
} from '../actions/articleForm'

const initialState = {
  title: null,
  text: null
}

const clearState = (state) => Object.assign({}, state, {
  title: null,
  text: null
})

export default (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_CREATION_STARTED:
      return

    case ARTICLE_CREATION_SUCCESS:
      return clearState(state)

    case ARTICLE_CREATION_FAILURE:
      return clearState(state)

    case UPDATE_TITLE:
      return Object.assign({}, state, { title: action.payload })

    case UPDATE_TEXT:
      return Object.assign({}, state, { text: action.payload })

    default:
      return state
  }
}
