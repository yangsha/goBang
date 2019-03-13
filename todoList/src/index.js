import React from 'react'
import {render} from 'react-dom'
// import {Provider} from 'react-redux'
// import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import Chess from './components/Chess'
import reducer from "./reducers/reducer"

// let store = createStore(setpoint)

render(
 /* <Provider store={store}>
    <App/>
   <Chess/>
  </Provider>,*/
  <Chess />,
  document.getElementById('root')
)
