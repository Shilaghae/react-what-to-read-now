import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import booksReducer from '../reducers/BooksReducer'
import shelvesReducer from '../reducers/ShelvesReducer'
import thunk from 'redux-thunk';
import ShelvesReducer from '../reducers/ShelvesReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      books: booksReducer,
      shelves: shelvesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
