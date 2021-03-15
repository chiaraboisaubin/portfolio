import React, { Component } from 'react';
import './sass/main.scss';
import { BrowserRouter as Router, Switch, Link, Redirect, Route } from 'react-router-dom'

// pages
import Mainpage from './pages/';
import NotFoundPage from './pages/404';
import ChowdownPage from './pages/chowdown';
import ChiarasSitePage from './pages/chiaras-site';
import AshleysSitePage from './pages/ashleysite';
import AnimeListPage from './pages/AnimeList';
import SoulMarcosPage from './pages/soulmarcos';
import WordUpPage from './pages/wordup'
import InkTankPage from './pages/inktank'

//components
import Hero from './components/home/Hero';
class App extends Component {
  render() {
    return (
      <div className="App">
<Router>
  <Switch>
  <Route exact path="/" component={Mainpage} /> 
  <Route exact path="/wordup" component={WordUpPage} />
  <Route exact path="/chowdown" component={ChowdownPage} />
  <Route exact path="/chiaras-site" component={ChiarasSitePage} />
  <Route exact path="/ashleysite" component={AshleysSitePage} />
  <Route exact path="/AnimeList" component={AnimeListPage} />
  <Route exact path="/soulmarcos" component={SoulMarcosPage} />
  <Route exact path="/inktank" component={InkTankPage} />
  <Route exact path="/404" component={NotFoundPage} />
  <Redirect to="/404" />
  </Switch>
</Router>
      </div>
    );
  }
}

export default App;