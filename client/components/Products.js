import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createLineItem, updateLineItem } from '../reducers/lineItems'
import { updateOrder } from '../reducers/orders'

import ProductCard from './ProductCard'


class Products extends Component {
    constructor (props) {
        super(props)
    
        this.orderIncrease = this.orderIncrease.bind(this)
        this.orderDecrease = this.orderDecrease.bind(this)
        this.cancelOrder = this.cancelOrder.bind(this)
    }

    componentDidUpdate () {
        // console.log('componentDidUpdate ran....')
        // updateOrder(this.props.order.id)
    }

    orderIncrease (productId) {
        let lineItem = this.props.order.lineItems.find(item => item.productId == productId)
        const { order } = this.props
        console.log("order in orderIncrease is", order)
        // console.log('productId is: ', productId)
        // console.log('product  is: ', product)
        // console.log('order line items are: ', this.props.order.lineItems)

        if (lineItem == undefined) {
            console.log('Create lineItem')
            this.props.createLineItem(order.id, productId)
            updateOrder(order.id)
        } else {
            console.log('Update Quantity on lineItem: ', lineItem)
            lineItem.quantity++
            updateLineItem(order.id, lineItem)
        }

    }
    
    orderDecrease  (productId) {
        const { order } = this.state
        // deleteLineItem(order.id, productId )
    }

    cancelOrder () {
        this.setState({
            order: {}
        })
    }

    submitOrder () {

    }

    render () {
        const lineItems = (this.props.order) ? this.props.order.lineItems : []

        return (
            <div>
                <hr />
                <h1>Order is:</h1>
                {lineItems.map(li => (
                    <p>{li.productId}</p>
                ))}
                <h1>Products</h1>
                <div className={'card-container'}>
                    {this.props.products.map(product => {
                        // const quantity = this.state.order[product.name] || 0

                        return <ProductCard 
                            product= { product } 
                            key= { product.id } 
                            // quantity= { quantity }
                            orderIncrease= { this.orderIncrease } 
                            orderDecrease= { this.orderDecrease }
                        />
                    })}
                </div>
                <div>
                    <button className={ 'submit-btn' } >Submit Order</button>
                    <button className={ 'cancel-btn' } onClick={()=> this.cancelOrder()} >Cancel Order</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state in mapStateToPRops is: ', state)

    const { products, orders } = state
    let order = orders.find(order => order.status === 'CART')
    if (order) {
        console.log('the order found is: ', order)
        // order.lineItems = [ ...order.lineItems, ...lineItems ]
    }
    // (props.order) ? [...props.order.lineItems, props.lineItems] : props.lineItems

    return { 
        products, 
        order
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createLineItem: (orderId, productId) => { dispatch(createLineItem(orderId, productId)) },
        deleteLineItem: (orderId, lineItemsId) => { dispatch(deleteLineItem(orderId, lineItemsId)) },
        updateOrder: (orderId)=> dispatch(updateOrder(orderId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)