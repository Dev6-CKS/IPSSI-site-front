import "babel-core/register"
import "babel-polyfill"

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { createHashHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import { useRouterHistory } from 'react-router'

//Components
import App from './app'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const store = configureStore(appHistory)

render(
  <Provider store={store}>
    <App history={appHistory}/>
  </Provider>,
  document.getElementById('container')
)
