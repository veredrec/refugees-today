import React, { Component } from 'react';
import './../style/CountryMenu.css';

class CountryMenu extends Component {
  render() {
    return (
      <div className="menu-wrapper">
        <select className="country-menu">
          <option class="option">SELECT COUNTRY</option>
          <option class="option">Turkey</option>
          <option class="option">Pakistan</option>
          <option class="option">Lebanon</option>
          <option class="option">Israel</option>
        </select>
      </div>
    );
  }
}

export default CountryMenu;
