import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

class Nav extends Component {
    constructor() {
        super()

        this.state = {}
    }
      
    render() {
        return (
            <div>
                <ul className='nav nav-pills'>
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/Cart">Cart</Link></li>
                    <li className="nav-item"><Link to="/Orders">Orders</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav