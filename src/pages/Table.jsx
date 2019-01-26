import React, {Component} from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import StatusBox from '../components/StatusBox';
import Flop from '../components/Flop';
import NavBar from '../components/NavBar';
import Player from '../components/Player';
import {changeTurn} from '../actions/gameActions';

// Will hold all essential components during game

export class Table extends React.Component {
    constructor(props){
        super(props);
        this.testChangeTurn = this.testChangeTurn.bind(this);
    }

    testChangeTurn(){
        this.props.dispatch(changeTurn())
    }


    render(){
        const currentGame = this.props.game;
        const chips = currentGame.chipValues;
        const pot = currentGame.pot;
        const currentPlayer = currentGame.currentPlayer;

        const displayCurrentPlayer = () => {
            if(currentPlayer !== null){
                return <Player player={currentPlayer} chipValues={chips} pot={pot} key={currentPlayer.name}/>
            }
        }
        
        const getTotal = (total, num) => {
            return total + num;
        }

        const displayTotalBet = () => {
            const whiteVal = chips.white.value * pot.white;
            const greenVal = chips.green.value * pot.green;
            const redVal = chips.red.value * pot.red;
            const blueVal = chips.blue.value * pot.blue;
            const blackVal = chips.black.value * pot.black;
            const total = [whiteVal, greenVal, redVal, blueVal, blackVal].reduce(getTotal);
            const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
            return currency.format(total);
        }
        return (
            <div className="container">
                <NavBar />
                <button onClick={this.testChangeTurn}>Test Turn</button>
                <Link to="/">Home</Link>
                <div>{displayTotalBet()}</div>
                <div>{displayCurrentPlayer()}</div>
                <Flop players={currentGame.players} />
                {/* <StatusBox game={currentGame}/> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    game: state.game
})

export default connect(mapStateToProps)(Table)