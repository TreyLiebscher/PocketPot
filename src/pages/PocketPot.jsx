import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './PocketPot.css';


// import SetupGame from './SetupGame';

class PocketPot extends Component {
    render(){
        return (
            <Router>
                <div className="main-content">
                    <div>Welcome to pocketpot</div>
                    <Link to="/new-game">New Game</Link>
                </div>
            </Router>
        )
    }
}

export default PocketPot;