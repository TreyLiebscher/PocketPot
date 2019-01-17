import React, {Component} from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import StatusBox from '../components/StatusBox';
import Flop from '../components/Flop';

// Will hold all essential components during game

export class Table extends React.Component {

    render(){
        const currentGame = this.props.game;

        return (
            <div>
            <Link to="/">Home</Link>
            <StatusBox game={currentGame}/>
            <Flop players={currentGame.players} />
            </div>

        )
    }
}

const mapStateToProps = state => ({
    game: state.game
})

export default connect(mapStateToProps)(Table)