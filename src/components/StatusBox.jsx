import React, {component} from 'react';
import Chip from './Chip';
import Player from './Player';

class StatusBox extends React.Component {
    render(){

        const players = this.props.game.players.map((player, index) => {
            return <Player player={player} chipValues={this.props.game.chipValues} pot={this.props.game.pot} key={index}/>
        });

        const playerSection = () => {
            if(this.props.game.players.length === 0){
                return;
            } else {
                return <ol className="player-list">{players}</ol>
            }
        }

        return (
            <div>
                {playerSection()}
            </div>   
        )
    }
}

export default StatusBox;