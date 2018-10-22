import React from 'react'
import axios from 'axios'
import store from '../store'

const LOAD_ORDERS = 'LOAD_ORDERS'
const SET_ORDER = 'SET_ORDER'
const UPDATE_ORDER = 'UPDATE_ORDER'

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

const _updateOrder = (order) => {
    return {
        type: UPDATE_ORDER, 
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

export const updateOrder = (orderId) => {
    console.log('update order called')
    return (dispatch) => {
        axios.put(`/api/orders/${orderId}`)
            .then(res => res.data)
            .then(order => dispatch(_updateOrder(order)))
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
        case UPDATE_ORDER:
            const idx = state.findIndex( _order => _order.id == action.order.id)
            state[idx] = action.order
        default: 
            return state
    }

    return state
}   

export default reducer