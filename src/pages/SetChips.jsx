import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChipValueForm from '../components/ChipValueForm';
import StatusBox from '../components/StatusBox';
import NavBar from '../components/NavBar';

class SetChips extends React.Component {

    render(){
        const currentGame = this.props.game;
        return (
            <div className="container">
                <NavBar />
                <StatusBox game={currentGame}/>
                <h2>Set player's starting chip amount and values</h2>
                <ChipValueForm />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    game: state.game
});

export default connect(mapStateToProps)(SetChips);