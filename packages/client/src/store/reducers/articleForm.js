import {
  ARTICLE_CREATION_STARTED,
  ARTICLE_CREATION_SUCCESS,
  ARTICLE_CREATION_FAILURE
} from '../actions/createArticle'

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

    default:
      return state
  }
}
