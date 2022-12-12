import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"

import { DrinkApp } from './DrinkApp'
import { ProviderRespProducts } from './Providers/ProviderProducts'
import { ProviderStatusApp } from './Providers/ProviderStatusApp'
import { ProviderSideBar } from './Side_Bar/ProviderSideBarController'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <BrowserRouter>
      <ProviderSideBar>
      <ProviderStatusApp>
      <ProviderRespProducts>
          <DrinkApp/>
      </ProviderRespProducts>
      </ProviderStatusApp>
      </ProviderSideBar>
    </BrowserRouter>
  // </React.StrictMode>
)
