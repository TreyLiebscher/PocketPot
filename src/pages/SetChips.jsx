import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChipValueForm from '../components/ChipValueForm';
import StatusBox from '../components/StatusBox';

class SetChips extends React.Component {

    render(){
        const currentGame = this.props.game;
        return (
            <div>
                <StatusBox game={currentGame}/>
                <h1>Set player's starting chip amount and values</h1>
                <ChipValueForm />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    game: state.game
});

export default connect(mapStateToProps)(SetChips);