import React from 'react'
import axios from 'axios'
import store from '../store'

const LOAD_PRODUCTS = 'LOAD_PRODUCTS'

export const _loadProducts = (products) => {
    return {
        type: LOAD_PRODUCTS,
        products
    }
}

export const loadProducts = () => {
    console.log('loadProducts called')
    return (dispatch) => {
        axios.get('/api/products')
            .then(response => response.data)
            .then(products => dispatch(_loadProducts(products)))
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_PRODUCTS: 
            state = action.products
        break
        default: 
            return state
    }

    return state
}   

export default reducer