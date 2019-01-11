import React, {component} from 'react';

class Chip extends React.Component {


    render(){
        return (
            <div className="chip-holder">
                <div className={"chip " + this.props.chipColor}>${this.props.chipValue}</div>
                <div className="chip-quantity">{this.props.chipQuantity}</div>
            </div>
        )
    }
}

export default Chip;