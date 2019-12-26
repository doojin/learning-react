import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import articleListReducer from './reducers/articleList'
import articleFormReducer from './reducers/articleForm'
import notificationsReducer from './reducers/notifications'

const reducer = combineReducers({
  articleList: articleListReducer,
  articleForm: articleFormReducer,
  notifications: notificationsReducer
})

export default createStore(
  reducer,
  applyMiddleware(thunk)
)
