import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer, chipValue, addChips, distChips, handOver } from '../actions/gameActions';
import PlayerForm from '../components/PlayerForm';
import store from '../store';
import './SetupGame.css'



// store.dispatch(addPlayer({
//     name: 'Jack',
//     chips: {
//         white: 0,
//         green: 0,
//         red: 0,
//         blue: 0,
//         black: 0
//     },
//     status: null
// }))

// store.dispatch(addPlayer({
//     name: 'John',
//     chips: {
//         white: 0,
//         green: 0,
//         red: 0,
//         blue: 0,
//         black: 0
//     },
//     status: null
// }))

// store.dispatch(addPlayer({
//     name: 'Arthur',
//     chips: {
//         white: 0,
//         green: 0,
//         red: 0,
//         blue: 0,
//         black: 0
//     },
//     status: null
// }))

// store.dispatch(addPlayer({
//     name: 'Dutch',
//     chips: {
//         white: 0,
//         green: 0,
//         red: 0,
//         blue: 0,
//         black: 0
//     },
//     status: null
// }))


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

        // TODO refactor players into its own component
        const players = this.props.game.players.map((player) => {
            return  <li className="player-list-item">
                        <div>{player.name}</div>
                        <div className="chip-holder">
                            <div className="chip white">${this.props.game.chipValues.white.value}</div>
                            <div>{player.chips.white}</div>
                        </div>
                        <div className="chip-holder">
                            <div className="chip green">${this.props.game.chipValues.green.value}</div>
                            <div>{player.chips.green}</div>
                        </div>
                        <div className="chip-holder">
                            <div className="chip red">${this.props.game.chipValues.red.value}</div>
                            <div>{player.chips.red}</div>
                        </div>
                        <div className="chip-holder">
                            <div className="chip blue">${this.props.game.chipValues.blue.value}</div>
                            <div>{player.chips.blue}</div>
                        </div>
                        <div className="chip-holder">
                            <div className="chip black">${this.props.game.chipValues.black.value}</div>
                            <div>{player.chips.black}</div>
                        </div>
                    </li>

        });
        
        const playerSection = () => {
            if(this.props.game.players.length === 0){
                return;
            } else {
                return <ol className="player-list">{players}</ol>
            }
        }

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
        
        return (
            <div className="container">
                <div className="setup-game">New game setup...</div>
                <PlayerForm />
                <div>{playerStatus}</div>
                {playerSection()}
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