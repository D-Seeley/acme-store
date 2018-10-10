import React from 'react'
import axios from 'axios'
import store from '../store'

//Constants
const CREATE_LINEITEM = 'CREATE_LINEITEM'

//Action Creators
export const _createLineItem = (produtId) => {
    return {
        type: CREATE_LINEITEM,
        products
    }
}

export const createLineItem = (order, lineItem) => {
    // const order = {
    //     orderId, 
    //     quantity, 
    //     productId
    // }

    return (dispatch) => {
        axios.post(`/api/orders/${order.id}/lineItems/`, lineItem)
            .then(response => console.log(response))
    }
}

export const increaseLineItem = (order, lineItem) => {
    return (dispatch) => {
        axios.get
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        // case LOAD_PRODUCTS: 
        //     state = action.products
        // break
        default: 
            return state
    }

    return state
}   

export default reducer