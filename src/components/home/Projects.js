
import React, { Component } from 'react';
import { Link, link } from 'react-router-dom';


export default class Projects extends Component {
  render() {
    return (
      <React.Fragment>


        <h2 className="primary-header"> work </h2>
        <h3 className="secondary-header"> case study </h3>
        <div className="projects">
          <div className="galla">


            <div className="web">
              <Link to="/inktank">
                <div className="con">
                  <p>Find a tattoo artist , orgainzing projects, and scheduling appointments </p>
                <h4>Ink Tank </h4>
                <span className="modal-text"> read more  &#8594; </span>
                </div>
              </Link>
            </div>

            <div className="web">
              <Link to="/chowdown">
                <div className="hon">
                  <p>Group reservations and payment / Customing your diestary needs </p>
                <h4> ChowDown</h4>
                <span> read more  &#8594; </span>
                </div>
              </Link>
            </div>
    
            </div>
        </div>

      </React.Fragment>
    );
  }
}


