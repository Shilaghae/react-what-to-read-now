import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import LoadingPage from './components/LoadingPage'
import configureStore from './store/configureStore';
import {startSetBooks} from './actions/BooksAction'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { startSetShelves } from './actions/ShelvesAction';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(<LoadingPage />, document.getElementById('app'));

store.dispatch(startSetShelves(), startSetBooks()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});

