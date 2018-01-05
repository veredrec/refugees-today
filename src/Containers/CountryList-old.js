import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Country from './Country';
import './../style/Country.css';
import './../style/CountryList.css';

class CountryList extends Component {
  static defaultProps = {
    countries: [
      {
        title: 'Turkey',
        img: 'assets/turkey.jpg',
        popul: '79,510,000',
        refugees: '2,900,000',
        percent: '3.64%',
        est: '1923'
      },
      {
        title: 'Pakistan',
        img: 'assets/pakistan.jpg',
        popul: '207,774,520',
        refugees: '1,400,000',
        percent: '0.67%',
        est: '1947'
      },
      {
        title: 'Lebanon',
        img: 'assets/lebanon.jpg',
        popul: '6,006,668',
        refugees: '1,000,000',
        percent: '16.6%',
        est: '1920'
      },
      {
        title: 'Israel',
        img: 'assets/israel.jpeg',
        popul: '8,785,020',
        refugees: '45,000',
        percent: '0.51%',
        est: '1948'
      }
    ]
  };
  static PropTypes = {
    countries: PropTypes.arrayOf(PropTypes.object)
  };
  render() {
    const countries = this.props.countries.map((country, index) => (
      <Country key={index} {...country} />
    ));
    return <div className="country-list">{countries}</div>;
  }
}

export default CountryList;
