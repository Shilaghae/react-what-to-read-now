import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import booksReducer from '../reducers/BooksReducer'
import searchReducer from '../reducers/SearchReducer'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      books: booksReducer,
      search: searchReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
