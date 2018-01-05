import React, { Component } from 'react';
import Country from './Country';
import * as apiCalls from './api';

class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
    this.addCountry = this.addCountry.bind(this);
  }

  componentWillMount() {
    this.loadCountries();
  }

  async loadCountries() {
    let countries = await apiCalls.getCountries();
    this.setState({ countries });
  }

  render() {
    const countries = this.state.countries.map(t => (
      <Country key={c._id} {...t} />
    ));
    return (
      <div>
        <h1>Countries</h1>
        <ul>{countries}</ul>
      </div>
    );
  }
}

export default CountryList;
