import React, { Component } from 'react';
import './../style/Help.css';

class Help extends Component {
  render() {
    return (
      <div className="help-section">
        <h2 className="help-title"> HOW CAN I HELP? </h2>
        <ul className="help-menu">
          <li className="help-link">
            <img
              className="source-image"
              src="http://www.thementoringschool.com/wp-content/uploads/Help-Refugees-logo-small-300x270.png"
            />
            <a className="link" href="https://helprefugees.org/volunteer/">
              Help Refugees
            </a>
          </li>
          <li className="help-link">
            <img
              className="source-image"
              src="https://reliefweb.int/sites/reliefweb.int/files/resources/image001.png"
            />
            <a className="link" href="https://www.refugeesinternational.org/">
              Refugees International
            </a>
          </li>
          <li className="help-link">
            <img
              className="source-image"
              src="http://unkt.org/wp-content/uploads/2017/08/unhcr-1.png"
            />
            <a className="link" href="http://www.unhcr.org/get-involved.html">
              UNHCR
            </a>
          </li>
          <li className="help-link">
            <img
              className="source-image"
              src="https://www.butylproducts.co.uk/wp-content/uploads/2015/09/Int-Res-Com-Logo.jpg"
            />
            <a className="link" href="https://www.rescue.org/volunteer">
              International Rescue Committee
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Help;
