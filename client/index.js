import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import  { HashRouter as Router } from 'react-router-dom'

import App from './App'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('main'))