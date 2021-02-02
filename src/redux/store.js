import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import rootReducer from "./reducer-root";

const initialState = {
  products: {}
}

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

export default store;