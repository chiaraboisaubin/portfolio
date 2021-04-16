
import React, { Component } from 'react';
import { Link, link } from 'react-router-dom';


export default class Projects extends Component {
  render() {
    return (
      <React.Fragment>
 <a name="projects"></a>
<div className="projects">
        <h2 className="primary-header"> Case study</h2>
          <div className="galla">

          <Link to="/inktank">
            <div className="web">
                <div className="con">
                <h4>Ink Tank </h4>
                <span className="modal-text"> read more  &#8594; </span>
                </div>
            </div>
            </Link>

            <Link to="/chowdown">
            <div className="web">
                <div className="hon">
                <h4> ChowDown</h4>
                <span> read more  &#8594; </span>
                </div>
            </div>
            </Link>
    
            </div>
        </div>

      </React.Fragment>
    );
  }
}


