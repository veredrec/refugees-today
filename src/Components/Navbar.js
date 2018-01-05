import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../style/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo-wrapper">
          <h1 className="main-title">The World of Refugees</h1>
        </div>
        <nav className="navbar">
          <ul className="menu">
            <li className="menu-item">
              <Link to={'/'}>Refugees in the World</Link>
            </li>
            <li className="menu-item">
              <Link to={'/Sources'}>Sources</Link>
            </li>
            <li className="menu-item">
              <Link to={'/Help'}>How Can I help?</Link>
            </li>
            <li className="menu-item">
              <Link to={'/About'}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
