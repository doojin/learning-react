import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import articleListReducer from './reducers/articleList'
import articleFormReducer from './reducers/articleForm'

const reducer = combineReducers({
  articleList: articleListReducer,
  articleForm: articleFormReducer
})

export default createStore(
  reducer,
  applyMiddleware(thunk)
)
