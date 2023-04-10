import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../images/logo.png';
import "../css/header.css";

const Navbar = () => {
  return (
    <nav>
      <div className="header1">
        <Link to="/">
          <img src={Image} width="16%" height="16%" alt="Logo" />
        </Link>
        <div className='login-register'>
          <ul>
            <li>
              <Link className="" to="/login">Login</Link>
            </li>
            <li>
              <Link className="" to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
      <ul className="tab-container">
        <li className="item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="item">
          <Link className="nav-link" to="/promotions">Promotions</Link>
        </li>
        <li className="item">
          <Link className="nav-link" to="/restaurants-bars">Restaurants &amp; Bars</Link>
        </li>
        <li className="item">
          <Link className="nav-link" to="/weddings-events">Weddings &amp; Events</Link>
        </li>
        <li className="item">
          <Link className="nav-link" to="/order-now">Order Now</Link>
        </li>
        <li className="item">
          <Link className="nav-link" to="/rooms">Rooms</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;