import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './sass/main.scss';
import { BrowserRouter as Router, Switch, Redirect, Route, BrowserRouter } from 'react-router-dom'

// pages
import Mainpage from './pages/';
import NotFoundPage from './pages/404';
import ChowdownPage from './pages/chowdown';
import WordUpPage from './pages/wordup';
import InkTankPage from './pages/inktank';



//components
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
<Router >
  <Switch>
  <Route exact path="/" component={Mainpage} /> 
  <Route exact path="/chowdown" component={ChowdownPage} />
  <Route exact path="/inktank" component={InkTankPage} />
  <Route exact path="/404" component={NotFoundPage} />
  <Redirect to="/404" />
  </Switch>
</Router>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;