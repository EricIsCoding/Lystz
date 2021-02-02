import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from '../reducers/rootReducer'

import 'bootstrap/dist/css/bootstrap.min.css'

const composed = compose(applyMiddleware(thunk))

const store = createStore(rootReducer, composed)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.body.appendChild(document.createElement('div'))
  )
})