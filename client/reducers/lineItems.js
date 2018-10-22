import React from 'react'
import axios from 'axios'
import store from '../store'
import { bindActionCreators } from 'redux';
import { updateOrder } from './orders'

//Constants
const CREATE_LINEITEM = 'CREATE_LINEITEM'
const DELETE_LINEITEM = 'DELETE_LINEITEM'
const UPDATE_LINEITEM = 'UPDATE_LINEITEM'

//Action Creators
export const _createLineItem = (lineItem) => {
    return {
        type: CREATE_LINEITEM,
        lineItem
    }
}

const _deleteLineItem = (lineItem) => {
    return {
        type: DELETE_LINEITEM,
        lineItem
    }
}

const _updateLineItem = (lineItem) => { 
    return {
        type: UPDATE_LINEITEM,
        lineItem
    }
}

//Thunk Creators
export const createLineItem = (orderId, productId) => {
    console.log('the orderID is:', orderId)
    return (dispatch) => {
        axios.post(`/api/orders/${orderId}/lineItems/`, { productId })
            .then(res => res.data)
            .then(lineItem => dispatch(_createLineItem(lineItem)))
    }
}

export const deleteLineItem = (orderId, lineItemId) => {
    console.log('Delete Line Item Called')

    return (dispatch) => {
        axios.delete(`/api/orders/${orderId}/lineItems/${id}`)
            .then(()=> dispatch(_deleteLineItem(lineItemId)))
    }
}

export const updateLineItem = (order, lineItem) => {
    return (dispatch) => {
        axios.put(`/api/orders/${order.Id}/lineItems/${id}`, lineItem)
            .then(()=> dispatch(_updateLineItem(UPDATE_LINEITEM)))
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_LINEITEM: 
            return [...state, action.lineItem]
        case DELETE_LINEITEM:
            return state.filter(action.id !== action.id)
        case UPDATE_LINEITEM:
            const idx = state.findIndex(el => el.id == action.lineItem.id)
            state[idx] = action.lineitem
            return state
        default: 
            return state
    }

    return state
}   

export default reducer