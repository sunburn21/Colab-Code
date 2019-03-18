import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from '../reducers/auth';

const composeEnhancers = compose;
export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  store.subscribe(() => {
    console.log(store.getState().auth);
  })
  return store;
}