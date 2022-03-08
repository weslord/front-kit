import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './app/App'

import './style/normalize.css'
import './style/reset.scss'

import './style/index.scss'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
