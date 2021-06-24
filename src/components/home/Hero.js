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
                <li><a href="#projects" onclick="return false;" class="service"> work</a></li>
                <li> <a href="#about" onclick="return false;" class="service"> about </a></li>
                <li><a href="#skills" onclick="return false;" class="service">skills</a></li>
              </ul>
              <ul>
              <li> <a href="https://www.linkedin.com/in/chiara-boisaubin"rel="noopener noreferrer" target="_blank"> <span className="fa fa-linkedin"> </span> linkedin  </a>  </li>
                <li> <a href="https://www.behance.net/chiaraboisaubin"  rel="noopener noreferrer" target="_blank">  <span className="fa fa-behance"> </span>  behance </a>  </li>
                <li> <a href="https://www.instagram.com/cdb_arts/"  rel="noopener noreferrer" target="_blank">      <span className="fa fa-instagram"> </span> instagram </a> </li>
                <li> <a href="https://github.com/chiaraboisaubin"  rel="noopener noreferrer" target="_blank">       <span className="fa fa-github"> </span> github </a> </li>
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
