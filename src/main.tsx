import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"

import { DrinkApp } from './DrinkApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <BrowserRouter>
      <DrinkApp/>
    </BrowserRouter>
  // </React.StrictMode>
)
