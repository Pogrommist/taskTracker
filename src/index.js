import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './containers/App';
import rootReducer from './redux/reducers'

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk, logger)
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
