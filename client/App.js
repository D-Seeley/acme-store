import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'


//components
import Nav from './components/Nav'
import Products from './components/Products'
// import Cart from './components/Cart'
import Orders from './components/Orders'




class App extends Component {
    constructor (props) {
        super(props)

    }

    

    render () {
        return (
            <div>
                <Nav />
                <Switch>
                    <Route path='/Cart' component={Products}/>
                    <Route path='/Orders' component={Orders}/>
                </Switch>
            </div>
        )
    }
}

export default App