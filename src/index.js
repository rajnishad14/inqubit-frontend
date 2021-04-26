import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { WarehouseContextProvider } from './context'

ReactDOM.render(
  <React.StrictMode>
    <WarehouseContextProvider>
      <App />
    </WarehouseContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
