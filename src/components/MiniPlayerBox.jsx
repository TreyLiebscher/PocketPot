import React, {component} from 'react';
import './MiniPlayerBox.css';

class MiniPlayerBox extends React.Component {
    constructor(props){
        super(props);
    }

    render(){

        if(this.props.players.length === 0){
            return <div></div>;
        }

        const renderPlayers = this.props.players.map((player, index) => {
            return <li key={index} className="miniBox-item">{player.name}</li>
        })

        return (
            <div>
                <p>{this.props.players.length} player(s)</p>
                <ul className="miniBox-list">{renderPlayers}</ul>
            </div>
        )
    }
}

export default MiniPlayerBox;