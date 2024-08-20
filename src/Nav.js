import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <nav className="container">
            <img src="/images/header.logo.png" alt='Little Lemon Logo' style={{width: '184px', height: '48px'}}/>
            <ul> 
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/order">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;