import React, { Component } from 'react';

import * as actions from '../actions/gameActions';
import store from '../store';


store.dispatch(actions.addPlayer('Mike'));
store.dispatch(actions.addPlayer('Bob'));
store.dispatch(actions.addPlayer('Billy'));
console.log(store.getState());
class SetupGame extends Component {
    render(){
        return (
            <div className="setup-game">New game setup...</div>
        )
    }
}

export default SetupGame;