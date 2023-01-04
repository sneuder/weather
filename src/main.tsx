import React from 'react'
import ReactDOM from 'react-dom/client'

import store from './store'
import { Provider } from 'react-redux'

import App from './app'
import GlobalStyles from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
