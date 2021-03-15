import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
export default class NavTwo extends Component {
    render() {
      return (
        <React.Fragment>
            <ul className="link-hp">
                <Link to="/"> home </Link>
            </ul>
    
        </React.Fragment>
    );
  }
}
