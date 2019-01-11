import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer, chipValue, addChips, distChips, handOver } from '../actions/gameActions';
import PlayerForm from '../components/PlayerForm';
import store from '../store';
import './SetupGame.css'
import StatusBox from '../components/StatusBox';

// for testing - TODO remove when no longer required
store.dispatch(chipValue({
    white: {value: 5, quantity: 50}, 
    red: {value: 10, quantity: 25}, 
    green: {value: 15, quantity: 20}, 
    blue: {value: 20, quantity: 10}, 
    black: {value: 25, quantity: 5}
}))
//

class SetupGame extends Component {
    // retain for future use  
    // componentDidMount(){

    // }
    //

    render(){

        // TODO refactor playerStatus into its own component
        const playerStatus = this.props.game.players.map((player) => {
            let dealer;
            let smallBlind;
            let bigBlind;
            if(player.status === 'dealer'){
                dealer = player.name;
                return <div>Dealer - {dealer}</div>
            }
            else if (player.status === 'smallBlind'){
                smallBlind = player.name;
                return <div>Small Blind - {smallBlind}</div>
            }
            else if (player.status === 'bigBlind'){
                bigBlind = player.name;
                return <div>Big Blind - {bigBlind}</div>
            }
        })

        const currentGame = this.props.game;
        
        return (
            <div className="container">
                <div className="setup-game">New game setup...</div>
                <PlayerForm />
                <div>{playerStatus}</div>
                <button className="test-button" onClick={e => this.props.dispatch(handOver())}>Shift dealer</button>
                <button className="test-button" onClick={e => {this.props.dispatch(distChips())}}>Dist chips</button>
                <StatusBox game={currentGame} />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    game: state.game
})

export default connect(mapStateToProps)(SetupGame)