import React, { Component } from 'react'
import axios from 'axios'

import Products from './Products'

class Cart extends Component {
    constructor () {
        super()

    }



    render () {
        return ( <Products /> )
    }
}

export default Cart