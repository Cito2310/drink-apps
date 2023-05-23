import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from "react-router-dom"

import { DrinkApp } from './DrinkApp'
import { store } from './store/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
        <Provider store={ store }>
            <DrinkApp/>
        </Provider>
    </HashRouter>
  </React.StrictMode>
)
