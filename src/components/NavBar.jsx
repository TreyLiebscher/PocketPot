import React, {Component} from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './NavBar.css';

class NavBar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="nav-bar">
                <h1>PocketPot</h1>
            </div>
        )
    }
}

export default NavBar;