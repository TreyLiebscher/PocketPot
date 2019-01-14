import React, {Component} from 'react';
import { connect } from 'react-redux';
import StatusBox from '../components/StatusBox';

// Will hold all essential components during game

export class Table extends React.Component {

    render(){
        const currentGame = this.props.game;

        return (
            <StatusBox game={currentGame}/>
        )
    }
}

const mapStateToProps = state => ({
    game: state.game
})

export default connect(mapStateToProps)(Table)