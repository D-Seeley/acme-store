import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import store from '../store'
import { _loadOrders } from '../reducers/orders'

class Orders extends Component {
    constructor (props) {
        super(props)

        this.state = {
            products: props.orders
        }
    }

    componentDidMount () {
        // axios.get('/api/closed-orders')
        //     .then(response => response.data)
        //     .then(orders => store.dispatch(_loadOrders(orders)))
    }
    
    render () {
        return (           
            <div>
                <h1>Orders</h1>
                <div className={'card-container'}>
                    {this.props.orders.map(order => {
                        return (
                            <p>{order.id}</p>
                        )
                    })}
                </div>
                <div>
                    <h2>Submit Order</h2>
                    <h2>Cancel Order</h2>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { orders } = state
    return { orders }
}


export default connect(mapStateToProps)(Orders)