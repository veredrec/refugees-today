import React, { Component } from 'react';
import CountryList from './CountryList';
import People from './../Components/People';
import CountryMenu from './../Components/CountryMenu';
import './../style/Refugees.css';

class Refugees extends Component {
  render() {
    return (
      <div className="refugees-app">
        <CountryMenu />
        <div className="country-section">
          <CountryList />
        </div>
        <People />
      </div>
    );
  }
}

export default Refugees;
