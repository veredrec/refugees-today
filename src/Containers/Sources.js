import React, { Component } from 'react';
import './../style/Sources.css';

class Sources extends Component {
  render() {
    return (
      <div className="sources-section">
        <h2 className="sources-title"> I WANT TO KNOW MORE </h2>
        <ul className="sources-menu">
          <li className="source-link">
            <img
              className="source-image"
              src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2010/05/wikipedia1.png"
            />
            <a className="source" href="https://en.wikipedia.org/wiki/Refugee">
              Wikipedia - Refugees
            </a>
          </li>
          <li className="source-link">
            <img
              className="source-image"
              src="http://unkt.org/wp-content/uploads/2017/08/unhcr-1.png"
            />
            <a className="source" href="http://www.unhcr.org/en-ie/">
              The UN Refugee Agency
            </a>
          </li>
          <li className="source-link">
            <img
              className="source-image"
              src="http://www.therefugeeproject.org/imgs/facebook.jpg"
            />
            <a className="source" href="http://www.therefugeeproject.org/">
              The Refugee Project
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sources;
