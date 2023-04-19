import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from "react-router-dom"

import { DrinkApp } from './DrinkApp'
import { ProviderRespProducts } from './Providers/ProviderProducts'
import { ProviderStatusApp } from './Providers/ProviderStatusApp'
import { ProviderSideBar } from './Side_Bar/ProviderSideBarController'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <HashRouter>
      <ProviderSideBar>
      <ProviderStatusApp>
      <ProviderRespProducts>
          <DrinkApp/>
      </ProviderRespProducts>
      </ProviderStatusApp>
      </ProviderSideBar>
    </HashRouter>
  // </React.StrictMode>
)
