import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer, chipValue, addChips } from '../actions/gameActions';
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
    white: {value: 5, quantity: 20}, 
    red: {value: 10, quantity: 20}, 
    green: {value: 15, quantity: 20}, 
    blue: {value: 20, quantity: 20}, 
    black: {value: 25, quantity: 20}
}))

store.dispatch(addChips({
    name: 'Jack',
    chips: {
        white: 20,
        green: 15,
        red: 10,
        blue: 5,
        black: 3
    }
}));
console.log(store.getState());

class SetupGame extends Component {
    componentDidMount(){
        
    }
    render(){
        return (
            <div className="setup-game">New game setup...</div>
        )
    }
}


const mapStateToProps = state => ({
    game: state.game
})

export default connect(mapStateToProps)(SetupGame)