import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';


import './sass/main.scss';
import {Animated} from "react-animated-css";
import {AnimatePresence, motion} from 'framer-motion';


import 'animate.css/animate.css';
// pages
import Mainpage from './pages/';
import NotFoundPage from './pages/404';
import ChowdownPage from './pages/chowdown';
import InkTankPage from './pages/inktank';
import SoulMarcosPage from './pages/soulmarcos';
import CareOf from './pages/careof';


//components
function App () {
    return (
      <div>
<Router history={browserHistory}>
<Route exact path="/" component={Mainpage} />
  <Route  path="/chowdown" component={ChowdownPage} />
  <Route  path="/inktank" component={InkTankPage} />
  <Route  path="/careof" component={CareOf} />
  <Route  path="/soulmarcos" component={SoulMarcosPage} />
  <Route  path="/404" component={NotFoundPage} />
  <Route path="/chowdown" component={ChowdownPage}/>
    <Route path="/inktank" component={InkTankPage}/>
</Router>
      </div>


    );
}

export default App;