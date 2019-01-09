import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-wrapper">
          <div>
            {routes}  
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
