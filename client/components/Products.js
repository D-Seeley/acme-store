import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import store from '../store'
import { _loadProducts } from '../reducers/products'
import { _loadOrders } from '../reducers/orders'
import { createLineItem } from '../reducers/lineItems'

import ProductCard from './ProductCard'


class Products extends Component {
    constructor (props) {
        super(props)
        
        console.log(props)

        this.state = {
            products: this.props.products,
            order: this.props.order,
        }
    
        this.orderIncrease = this.orderIncrease.bind(this)
        this.orderDecrease = this.orderDecrease.bind(this)
        this.cancelOrder = this.cancelOrder.bind(this)
    }

    componentDidMount () {
        console.log('Props before: ', this.props)
        axios.get('/api/orders')
            .then(res => res.data)
            .then(data => store.dispatch(_loadOrders(data)))
            .then(()=> {
                axios.get('/api/products')
                    .then(res => res.data)
                    .then(data => store.dispatch(_loadProducts(data)))
            })
    }

    orderIncrease (productId) {
        if (!this.state.items.includes(item => item.id === productId)) {
            console.log('item not in items.')
        }

        // const _order = this.state.order
        // if (this.state.order[productId]) {
        //     _order[productId] = this.state.order[productId] + 1
        // } else {
        //     _order[productId] = 1
        // }

        // this.setState({
        //     order: _order
        // })
    }
    
    orderDecrease  (productId) {
        const _order = this.state.order
        if (this.state.order[productId] > 0) {
            _order[productId] = this.state.order[productId] - 1
        }
        this.setState({
            order: _order
        })
    }

    cancelOrder () {
        this.setState({
            order: {}
        })
    }

    submitOrder () {

    }

    render () {
        console.log('the this.props.order is: ', this.props.order)
        return (
            <div>
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
    const { products, orders } = state
    return { 
        products, 
        order: orders.find(order => order.status === 'CART') 
    }
}

const mapDispatchToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)