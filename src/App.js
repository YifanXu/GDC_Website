import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';

import SideNav from './SideNav'

import Home from './pages/Home.js';
import About from './pages/About.js';

function App() {
  return (
    <div id="AppPage">
      <div id="topbar">
        <a href="/">Game Design Club Website</a>
      </div>
      <SideNav items={['About']}/>
      <Router id="content">
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/About" component={About}/>
      </Router>
    </div>
  );
}

export default App;
