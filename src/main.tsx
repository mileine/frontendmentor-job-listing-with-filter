import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { JobsContextProvider } from './context/JobsContext'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <JobsContextProvider>
      <App />
    </JobsContextProvider>
  </React.StrictMode>,
)
