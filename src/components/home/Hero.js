import { motion } from "framer-motion";
import React, { Component } from 'react';
export default class Hero extends Component {
  render() {
    return (
      <React.Fragment>
        <motion.div exit={{ opacity: 0 }}>
        {/*generated code*/}

        <div className="hero-body  animate__bounceInDown">
          <div className="hero-container-L">
          </div>

          <div className="hero-container">

            <div className="hero-container-R">
              <h1 className="hero-header"> Chiara is a UI/UX Designer that enjoys building experiences for people.</h1>
              <ul className="hp-links">
                <li><a href="#projects"> work</a></li>
                <li> <a href="#about"> about </a></li>
                <li><a href="#skills">skills</a></li>
              </ul>
              <ul>
                <li> <a href="https://www.linkedin.com/in/chiara-boisaubin" class="fa fa-linkedin" rel="noopener noreferrer" target="_blank"> </a> </li>
                <li> <a href="https://www.behance.net/chiaraboisaubin" class="fa fa-behance" rel="noopener noreferrer" target="_blank">  </a></li>
                <li> <a href="https://www.instagram.com/cdb_arts/" class="fa fa-instagram" rel="noopener noreferrer" target="_blank"> </a></li>
                <li> <a href="https://github.com/chiaraboisaubin" class="fa fa-github" rel="noopener noreferrer" target="_blank"> </a> </li>
              </ul>
            </div>

          </div>
        </div>
        <div className="hero-background"></div>
        </motion.div>
      

      </React.Fragment>
    );
  }
}
