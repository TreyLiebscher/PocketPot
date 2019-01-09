import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer, chipValue } from '../actions/gameActions';
import store from '../store';


store.dispatch(addPlayer('Mike'));
store.dispatch(addPlayer('Bob'));
store.dispatch(addPlayer({name: 'Billy', chips: 0}));
store.dispatch(chipValue({
    white: {value: 5, quantity: 20}, 
    red: {value: 10, quantity: 20}, 
    green: {value: 15, quantity: 20}, 
    blue: {value: 20, quantity: 20}, 
    black: {value: 25, quantity: 20}
}))
console.log(store.getState());

class SetupGame extends Component {
    render(){
        return (
            <div className="setup-game">New game setup...</div>
        )
    }
}




// export default SetupGame;

const mapStateToProps = state => ({
    game: state.game
})

export default connect(mapStateToProps)(SetupGame)