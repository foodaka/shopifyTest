import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducer';
import ReduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';


const store = createStore(
  reducers,
  compose(
  applyMiddleware(ReduxThunk,  createLogger()),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
