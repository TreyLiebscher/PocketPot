import React, { Component } from 'react';
import './App.css';
import routes from './routes';
// import { BrowserRouter as Router } from 'react-router-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <div>
          <Router>
            <div>    
              {routes}
              {/* <Link to="/newGame">New Game</Link> */}
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
