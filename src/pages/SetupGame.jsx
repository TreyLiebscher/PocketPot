import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer, chipValue, addChips, distChips, handOver } from '../actions/gameActions';
import store from '../store';



store.dispatch(addPlayer({
    name: 'Jack',
    chips: {
        white: 0,
        green: 0,
        red: 0,
        blue: 0,
        black: 0
    }
}))

store.dispatch(addPlayer({
    name: 'John',
    chips: {
        white: 0,
        green: 0,
        red: 0,
        blue: 0,
        black: 0
    }
}))

store.dispatch(addPlayer({
    name: 'Arthur',
    chips: {
        white: 0,
        green: 0,
        red: 0,
        blue: 0,
        black: 0
    }
}))

store.dispatch(chipValue({
    white: {value: 5, quantity: 35}, 
    red: {value: 10, quantity: 25}, 
    green: {value: 15, quantity: 20}, 
    blue: {value: 20, quantity: 10}, 
    black: {value: 25, quantity: 5}
}))

console.log('kiwi', store.getState());

class SetupGame extends Component {
    
    componentDidMount(){

    }

    render(){
        const players = this.props.game.players.map((player) => {
            return  <div>
                        <div>{player.name}</div>
                        <div>White: {player.chips.white}</div>
                        <div>Green: {player.chips.green}</div>
                        <div>Red: {player.chips.red}</div>
                        <div>Blue: {player.chips.blue}</div>
                        <div>Black: {player.chips.black}</div>
                    </div>

        });

        const newChips = {name: 'Jack', chips: {white: 15}};
        
        return (
            <div className="container">
                <div className="setup-game">New game setup...</div>
                {/* <div>Dealer: {this.props.game.dealer.name}</div>
                <div>Small Blind: {this.props.game.smallBlind.name}</div>
                <div>Big Blind: {this.props.game.bigBlind.name}</div> */}
                <div>{players}</div>
                <button className="test-button" onClick={e => this.props.dispatch(handOver())}>Shift dealer</button>
                <button className="test-button" onClick={e => this.props.dispatch(distChips())}>Dist chips</button>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    game: state.game
})

export default connect(mapStateToProps)(SetupGame)