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

        // const status = () => {
        //     if(this.props.game.dealer == null){
        //         return;
        //     } else {
        //         const dealer = this.props.game.dealer.name;
        //         const smallBlind = this.props.game.smallBlind.name;
        //         const bigBlind = this.props.game.bigBlind.name;
        //         return <div>
        //             <div>Dealer {dealer.name}</div>
        //             <div>Small Blind {smallBlind.name}</div>
        //             <div>Big Blind {bigBlind.name}</div>
        //         </div>
        //         console.log(dealer.name)

        //     }


        // }
        
        return (
            <div className="container">
                <div className="setup-game">New game setup...</div>
                {/* <div>{status()}</div> */}
                <div>{players}</div>
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