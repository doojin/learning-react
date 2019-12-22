import { createStore, applyMiddleware } from 'redux'
import articleListReducer from './reducers/articleList'
import thunk from 'redux-thunk'

export default createStore(
  articleListReducer,
  applyMiddleware(thunk)
)
