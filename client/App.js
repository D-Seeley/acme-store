import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import store from './store'
import { _loadProducts } from './reducers/products'
import { _loadOrders } from './reducers/orders'

//components
import Nav from './components/Nav'
import Products from './components/Products'
// import Cart from './components/Cart'
import Orders from './components/Orders'
import { increaseLineItem } from './reducers/lineItems';

class App extends Component {
    constructor (props) {
        super(props)

    }

    componentDidMount () {
        this.init()
    }

    async init () {
        await axios.get('/api/orders')
            .then(res => res.data)
            .then(data => store.dispatch(_loadOrders(data)))
        
        await axios.get('/api/products')
            .then(res => res.data)
            .then(data => store.dispatch(_loadProducts(data)))

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