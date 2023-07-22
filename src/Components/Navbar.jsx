import React from 'react';
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="nav-center">
            <div className="nav-header">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                <button type="button" className="nav-btn">
                    <FaAlignRight className="nav-icon" />
                </button>
            </div>
            <ul className="">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/rooms">Rooms</Link>
                </li>
            </ul>
        </div>

    </nav>
  )
}
