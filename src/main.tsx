import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"

import { DrinkApp } from './DrinkApp'
import { ProviderSideBar } from './Side_Bar/ProviderSideBarController'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <BrowserRouter>
      <ProviderSideBar>
        <DrinkApp/>
      </ProviderSideBar>
    </BrowserRouter>
  // </React.StrictMode>
)
