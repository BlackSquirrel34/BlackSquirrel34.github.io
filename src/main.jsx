import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux' // allows the Redux store to be accessed by all components in the application.
import store from './store.js'

// Wrap the App with the Provider component and pass the Redux store as a prop. 
// This allows every component access to the details of store.js.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
