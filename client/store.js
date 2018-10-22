import Redux, { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import axios from 'axios'

//Reducers
import products from './reducers/products'
import orders from './reducers/orders'
import lineItems from './reducers/lineItems'



const reducer = combineReducers({
    products,
    orders, 
    lineItems
})

const store = createStore(reducer, applyMiddleware(thunk, logger))
 
export default store