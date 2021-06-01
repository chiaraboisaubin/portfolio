import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
export default class NavThree extends Component {
    render() {
      return (
        <React.Fragment>
            <ul className="link-hp">
                <Link to="/inktank"> Ink Tank </Link>
            </ul>
    
        </React.Fragment>
    );
  }
}
