import React from 'react'
import axios from 'axios'
import store from '../store'

const LOAD_ORDERS = 'LOAD_ORDERS'
const SET_ORDER = 'SET_ORDER'

export const _loadOrders = (orders) => {
    return {
        type: LOAD_ORDERS,
        orders
    }
}

const _setOrder = (order) => {
    return {
        type: SET_ORDER,
        order
    }
}

export const loadOrders = () => {
    console.log('load orders called')
    return (dispatch) => {
        axios.get('/api/orders')
            .then(res => res.data)
            .then(orders => dispatch(_loadOrders(orders)))
    }
}

const setOrder = (order) => {
    return (dispatch) => {
        axios.post('', {})
            .then()
    }
}


const reducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_ORDERS: 
            state = action.orders
        break
        default: 
            return state
    }

    return state
}   

export default reducer