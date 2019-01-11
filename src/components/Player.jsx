import React, {Component} from 'react';
import Chip from './Chip';

export class Player extends React.Component {

    render(){
        return (
            <li className="player-list-item">
                <div className="player-name">{this.props.player.name}</div>
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