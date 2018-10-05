import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import booksReducer from '../reducers/BooksReducer'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      books: booksReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
