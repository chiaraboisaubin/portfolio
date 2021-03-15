import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
export default class NavTwo extends Component {
    render() {
      return (
        <React.Fragment>
            <ul className="link-hp sticky">
            <li><a href="#projects"> work</a></li>
        <li> <a href="#about"> about </a></li>
        <li><a href="#resume">resume</a></li>
            </ul>
    
        </React.Fragment>
    );
  }
}
