import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer, chipValue, addChips, distChips, handOver } from '../actions/gameActions';
import store from '../store';
import './SetupGame.css'



store.dispatch(addPlayer({
    name: 'Jack',
    chips: {
        white: 0,
        green: 0,
        red: 0,
        blue: 0,
        black: 0
    },
    status: null
}))

store.dispatch(addPlayer({
    name: 'John',
    chips: {
        white: 0,
        green: 0,
        red: 0,
        blue: 0,
        black: 0
    },
    status: null
}))

store.dispatch(addPlayer({
    name: 'Arthur',
    chips: {
        white: 0,
        green: 0,
        red: 0,
        blue: 0,
        black: 0
    },
    status: null
}))

store.dispatch(addPlayer({
    name: 'Dutch',
    chips: {
        white: 0,
        green: 0,
        red: 0,
        blue: 0,
        black: 0
    },
    status: null
}))


store.dispatch(chipValue({
    white: {value: 5, quantity: 50}, 
    red: {value: 10, quantity: 25}, 
    green: {value: 15, quantity: 20}, 
    blue: {value: 20, quantity: 10}, 
    black: {value: 25, quantity: 5}
}))

console.log('kiwi', store.getState());

class SetupGame extends Component {
    
    // componentDidMount(){

    // }

    render(){
        const players = this.props.game.players.map((player) => {
            return  <li className="player-list-item">
                        <div>{player.name}</div>
                        <div>White: {player.chips.white}</div>
                        <div>Green: {player.chips.green}</div>
                        <div>Red: {player.chips.red}</div>
                        <div>Blue: {player.chips.blue}</div>
                        <div>Black: {player.chips.black}</div>
                    </li>

        });

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
        
        return (
            <div className="container">
                <div className="setup-game">New game setup...</div>
                <div>{playerStatus}</div>
                <ol className="player-list">{players}</ol>
                <button className="test-button" onClick={e => this.props.dispatch(handOver())}>Shift dealer</button>
                <button className="test-button" onClick={e => {this.props.dispatch(distChips())}}>Dist chips</button>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    game: state.game
})

export default connect(mapStateToProps)(SetupGame)