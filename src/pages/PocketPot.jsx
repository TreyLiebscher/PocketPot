import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './PocketPot.css';

class PocketPot extends Component {
    render(){
        return (
            <div className="main-content">
                <div>Welcome to pocketpot</div>
                <Link to="/new-game">New Game</Link>
            </div>
        )
    }
}

export default PocketPot;