import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addPlayer, chipValue, addChips, distChips, handOver, makeBet } from '../actions/gameActions';
import PlayerForm from '../components/PlayerForm';
import NavBar from '../components/NavBar';
import store from '../store';
import './SetupGame.css'
import StatusBox from '../components/StatusBox';
import ChipValueForm from '../components/ChipValueForm';
import Flop from '../components/Flop';

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
                <NavBar />
                <div className="setup-game">New game setup...</div>
                <Flop players={currentGame.players}/>
                <PlayerForm />
                <div className="button-holder">
                    <button className="player-submit" onClick={e => this.submitPlayers()}>Submit</button>
                </div>
                {/* <button className="test-button" onClick={e => {this.props.dispatch(handOver())}}>Shift Roles</button> */}
                <StatusBox game={currentGame} />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    game: state.game
})

export default connect(mapStateToProps)(SetupGame)