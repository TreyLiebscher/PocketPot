import React, {Component} from 'react';
import Chip from './Chip';
import './Player.css'

export class Player extends React.Component {

    render(){
        const {status} = this.props.player;
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
        return (
            <li className="player-list-item">
                <div className="player-name">{this.props.player.name}</div>
                {displayStatus()}
                <Chip chipColor="white" chipValue={this.props.chipValues.white.value} chipQuantity={this.props.player.chips.white}/>
                <Chip chipColor="green" chipValue={this.props.chipValues.green.value} chipQuantity={this.props.player.chips.green}/>
                <Chip chipColor="red" chipValue={this.props.chipValues.red.value} chipQuantity={this.props.player.chips.red}/>
                <Chip chipColor="blue" chipValue={this.props.chipValues.blue.value} chipQuantity={this.props.player.chips.blue}/>
                <Chip chipColor="black" chipValue={this.props.chipValues.black.value} chipQuantity={this.props.player.chips.black}/>
            </li>
        )
    }
}

export default Player;