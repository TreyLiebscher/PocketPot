import React, {Component} from 'react';
import Chip from './Chip';
import './Player.css'

import BetForm from './BetForm';

export class Player extends React.Component {

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
            if(cards.pos1.value !== null){
                console.log('KIWI HELLO')
                return <div>
                    {/* <div>{cards.pos1.value.suit}</div> */}
                    <div>{cards.pos1.value.name}</div>
                    <div>
                        <img style={{maxHeight: '50px', maxWidth: '50px'}} src={cards.pos1.value.image}></img>
                    </div>
                    {/* <div>{cards.pos2.value.suit}</div> */}
                    <div>{cards.pos2.value.name}</div>
                    <div>
                        <img style={{maxHeight: '50px', maxWidth: '50px'}} src={cards.pos2.value.image}></img>
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
                {displayStatus()}
                {totalChipValue()}
                {displayCards()}
                <Chip chipColor="white" chipValue={this.props.chipValues.white.value} chipQuantity={this.props.player.chips.white}/>
                <Chip chipColor="green" chipValue={this.props.chipValues.green.value} chipQuantity={this.props.player.chips.green}/>
                <Chip chipColor="red" chipValue={this.props.chipValues.red.value} chipQuantity={this.props.player.chips.red}/>
                <Chip chipColor="blue" chipValue={this.props.chipValues.blue.value} chipQuantity={this.props.player.chips.blue}/>
                <Chip chipColor="black" chipValue={this.props.chipValues.black.value} chipQuantity={this.props.player.chips.black}/>
                <BetForm />
            </li>
        )
    }
}

export default Player;