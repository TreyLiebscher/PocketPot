import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addPlayer, chipValue, addChips, distChips, handOver, makeBet } from '../actions/gameActions';
import PlayerForm from '../components/PlayerForm';
import store from '../store';
import './SetupGame.css'
import StatusBox from '../components/StatusBox';
import ChipValueForm from '../components/ChipValueForm';

// for testing - TODO remove when no longer required
// store.dispatch(chipValue({
//     white: {value: 5, quantity: 50}, 
//     red: {value: 10, quantity: 25}, 
//     green: {value: 15, quantity: 20}, 
//     blue: {value: 20, quantity: 10}, 
//     black: {value: 25, quantity: 5}
// }))
//


class SetupGame extends Component {
    // retain for future use  
    // componentDidMount(){

    // }
    //
    constructor(){
        super();
        this.state = {
            playersSubmitted: false
        }
    }

    submitPlayers(){
        this.setState({playersSubmitted: true})
    }

    render(){

        const currentGame = this.props.game;
        const {playersSubmitted} = this.state;
        
        if(playersSubmitted === true){
            return <Redirect to='/set-chips' />
        }
        
        return (
            <div className="container">
                <div className="setup-game">New game setup...</div>
                <PlayerForm />
                <button onClick={e => this.submitPlayers()}>Submit</button>
                <button className="test-button" onClick={e => {this.props.dispatch(distChips())}}>Dist chips</button>
                <button className="test-button" onClick={e => {this.props.dispatch(handOver())}}>Shift Roles</button>
                <button className="test-button" onClick={e => {this.props.dispatch(makeBet({
                    player: 'John',
                    chips: {
                        white: 10,
                        green: 2,
                        red: 0,
                        blue: 0,
                        black: 0
                    }            
                    }))}}>Test Bet</button>
                <StatusBox game={currentGame} />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    game: state.game
})

export default connect(mapStateToProps)(SetupGame)