import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-dark navbar-expand-lg' id="navbar">
                <Link to='/' className='navbar-brand'>E-SACCO</Link>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav mr-auto'>
                        <li className="navbar-item">
                            <Link to='/' className='nav-link' > Full list</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to='/create' className='nav-link' > New record</Link>
                        </li>
                        {/* <li className="navbar-item">
                            <Link to='/singleRecord' className='nav-link' > Single record</Link>
                        </li> */}
                         <li className="navbar-item">
                            <Link to='/savingsGroup' className='nav-link' > Savings groups</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to='/transactionHistory' className='nav-link' > Transaction history</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}
