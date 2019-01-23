import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addPlayer, chipValue, addChips, distChips, handOver, makeBet } from '../actions/gameActions';
import PlayerForm from '../components/PlayerForm';
import NavBar from '../components/NavBar';
import './SetupGame.css'
import StatusBox from '../components/StatusBox';


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
                <PlayerForm />
                <div className="button-holder">
                    <button className="player-submit" onClick={e => this.submitPlayers()}>Submit</button>
                </div>
                <StatusBox game={currentGame} />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    game: state.game
})

export default connect(mapStateToProps)(SetupGame)