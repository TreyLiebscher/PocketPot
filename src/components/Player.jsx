import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addChips} from '../actions/gameActions';
import Chip from './Chip';
import './Player.css'

import BetForm from './BetForm';

export class Player extends React.Component {
    constructor(props){
        super(props);
        this.showCardsUpdate = this.showCardsUpdate.bind(this);
        this.awardChips = this.awardChips.bind(this);
        this.state = {
            showCards: false
        }
    }

    showCardsUpdate(){
        if(this.state.showCards === false){
            this.setState({showCards: true})
        } else {
            this.setState({showCards: false})
        }
    }

    awardChips(){
        const pot = this.props.pot;

        this.props.dispatch(addChips({
            name: this.props.player.name,
            chips: {
                white: pot.white,
                green: pot.green,
                red: pot.red,
                blue: pot.blue,
                black: pot.black
            } 
        }))
    }

    render(){
        const {status, betting, cards} = this.props.player;
        const displayStatus = () => {
            if(status === 'dealer'){
                return <div className='player-status dealer'>{status}</div>
            } else if(status === 'smallBlind') {
                return <div className='player-status small-blind'>{status}</div>
            } else if(status === 'bigBlind') {
                return <div className='player-status big-blind'>{status}</div>
            } else {
                return <div className='player-status player-normal'>{status}</div>
            }
        }

        const displayCards = () => {
            if(cards.pos1.value !== null && this.state.showCards === true){
                
                return <div className="player-card-holder">
                    <div className="playing-card">
                        <div>{cards.pos1.value.name}</div>
                        <div>
                            <img style={{maxHeight: '50px', maxWidth: '50px'}} src={cards.pos1.value.image}></img>
                        </div>                    
                    </div>
                    <div className="playing-card">
                        <div>{cards.pos2.value.name}</div>
                        <div>
                            <img style={{maxHeight: '50px', maxWidth: '50px'}} src={cards.pos2.value.image}></img>
                        </div>                    
                    </div>
                </div> 

            }
        }

        const totalChipValue = () => {
            const values = this.props.chipValues;
            const chips = this.props.player.chips;
            
            const whiteChips = values.white.value * chips.white;
            const greenChips = values.green.value * chips.green;
            const redChips = values.red.value * chips.red;
            const blueChips = values.blue.value * chips.blue;
            const blackChips = values.black.value * chips.black;
            
            const totalValue = whiteChips + greenChips + redChips + blueChips + blackChips;

            const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
            return <div>{currency.format(totalValue)}</div>
        }

        const activeBet = () => {
            if(betting === true){
                return console.log('Bet form here')
            };
        }
        
        return (
            <li className="player-list-item">
                <div className="player-name">{this.props.player.name}</div>
                <button onClick={this.showCardsUpdate}>Show Cards</button>
                {displayStatus()}
                {totalChipValue()}
                {displayCards()}
                <Chip chipColor="white" chipValue={this.props.chipValues.white.value} chipQuantity={this.props.player.chips.white}/>
                <Chip chipColor="green" chipValue={this.props.chipValues.green.value} chipQuantity={this.props.player.chips.green}/>
                <Chip chipColor="red" chipValue={this.props.chipValues.red.value} chipQuantity={this.props.player.chips.red}/>
                <Chip chipColor="blue" chipValue={this.props.chipValues.blue.value} chipQuantity={this.props.player.chips.blue}/>
                <Chip chipColor="black" chipValue={this.props.chipValues.black.value} chipQuantity={this.props.player.chips.black}/>
                <BetForm player={this.props.player}/>
                <button onClick={this.awardChips}>Award Chips</button>
            </li>
        )
    }
}

const mapStateToProps = state => ({
    game: state.game
})

export default connect(mapStateToProps)(Player)