import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App.jsx'
import TodoApp from './TodoApp.jsx'
import PokemonApp from './PokemonApp.jsx'

import { store } from './store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <PokemonApp /> */}
      {/* <TodoApp /> */}
    </Provider>
  </React.StrictMode>,
)