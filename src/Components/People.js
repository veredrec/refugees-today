import React, { Component } from 'react';
import './../style/People.css';
import FaFemale from 'react-icons/lib/fa/female';
import FaMale from 'react-icons/lib/fa/male';

const figures = [];
let i = 0;
while (i < 50) {
  figures.push(<FaMale />, <FaFemale />);
  i++;
}

class People extends Component {
  constructor(props) {
    super(props);
    this.state = { color: 'red' };
    //   setInterval(() => {
    //     const figures = this.state.figures.slice();
    //     const randomFigure = Math.floor(Math.random() * figures.length);
    //     figures[randomFigure] = this.changeColor();
    //   }, 3000);
    // }
    // changeColor() {
    //   this.setState = { color: 'red' };
  }
  render() {
    return (
      <div className="people-section">
        {figures.map(p => {
          return <div className="person">{p}</div>;
        })}
      </div>
    );
  }
}

export default People;
