import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'

import App from '../components/App'
import { rootReducer } from '../reducers/rootReducer'


const store = configureStore({
  reducer: rootReducer
})

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.body.appendChild(document.createElement('div'))
  )
})