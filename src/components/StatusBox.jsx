import React, {component} from 'react';

class StatusBox extends React.Component {
    render(){

        const players = this.props.game.players.map((player, index) => {
            // TODO consider creating a component for chips, logic between diff value chips could become complex
            return  <li className="player-list-item" key={index}>
                        <div>{player.name}</div>
                        <div className="chip-holder">
                            <div className="chip white">${this.props.game.chipValues.white.value}</div>
                            <div>{player.chips.white}</div>
                        </div>
                        <div className="chip-holder">
                            <div className="chip green">${this.props.game.chipValues.green.value}</div>
                            <div>{player.chips.green}</div>
                        </div>
                        <div className="chip-holder">
                            <div className="chip red">${this.props.game.chipValues.red.value}</div>
                            <div>{player.chips.red}</div>
                        </div>
                        <div className="chip-holder">
                            <div className="chip blue">${this.props.game.chipValues.blue.value}</div>
                            <div>{player.chips.blue}</div>
                        </div>
                        <div className="chip-holder">
                            <div className="chip black">${this.props.game.chipValues.black.value}</div>
                            <div>{player.chips.black}</div>
                        </div>
                    </li>

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