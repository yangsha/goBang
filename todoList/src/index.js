import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import Chess from './components/Chess'
let store = createStore(todoApp)

render(
  <Provider store={store}>
   <Chess/>
  </Provider>,
  document.getElementById('root')
)
