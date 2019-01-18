import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './PocketPot.css';
import NavBar from '../components/NavBar';

class PocketPot extends Component {
    render(){
        return (
            <div className="container">
                <div className="main-content">
                    <NavBar />
                    <div>Welcome to pocketpot</div>
                    <Link to="/new-game">New Game</Link>
                </div>            
            </div>
        )
    }
}

export default PocketPot;