import React, {Component} from 'react';
import { connect } from 'react-redux';
import { makeBet } from '../actions/gameActions';
import Chip from './Chip';
class BetForm extends React.Component {
    constructor(props){
        super(props);
        this.showBetForm = this.showBetForm.bind(this);
        this.increaseBet = this.increaseBet.bind(this);
        this.state = {
            makeBet: false,
            white: 0,
            green: 0,
            red: 0,
            blue: 0,
            black: 0,
            totalBet: 0
        }
    }


    onSubmit(event) {
        event.preventDefault();
        
        console.log('kiwi submit')
    }


    showBetForm(){
        this.setState({makeBet: true})
    }

    increaseBet(e){

        const {
            white,
            green,
            red,
            blue,
            black
        } = this.state;

        if(e.target.id === 'white'){
            this.setState({[e.target.id]: white + 1})
        }
        else if(e.target.id === 'green'){
            this.setState({[e.target.id]: green + 1})
        }
        else if(e.target.id === 'red'){
            this.setState({[e.target.id]: red + 1})
        }
        else if(e.target.id === 'blue'){
            this.setState({[e.target.id]: blue + 1})
        }
        else if(e.target.id === 'black'){
            this.setState({[e.target.id]: black + 1})
        }

        function getTotal(total, val) {
            return total + val;
        }

        // const whiteVal = parseFloat(this.props.game.chipValues.white.value) * white;
        // const greenVal = this.props.game.chipValues.green * white;
        // const redVal = this.props.game.chipValues.red * white;
        // const blueVal = this.props.game.chipValues.blue * white;
        // const blackVal = this.props.game.chipValues.black * white;
        // const total = [whiteVal, greenVal, redVal, blueVal, blackVal].reduce(getTotal)
        // console.log(whiteVal)
        // this.setState({totalBet: total})
    }

    render(){
        const chips = this.props.game.chipValues;

        const displayChipInterface = () => {
            if(this.state.makeBet === true){
                return  <form className="bet-form" onSubmit={this.onSubmit}>
                            <div>{this.state.totalBet}</div>
                            <button onClick={this.increaseBet} ref={button => this.chipColor = button}><Chip chipValue={chips.white.value} chipColor="white" chipQuantity={this.state.white}/></button>
                            <button onClick={this.increaseBet} ref={button => this.chipColor = button}><Chip chipValue={chips.green.value} chipColor="green" chipQuantity={this.state.green}/></button>
                            <button onClick={this.increaseBet} ref={button => this.chipColor = button}><Chip chipValue={chips.red.value} chipColor="red" chipQuantity={this.state.red}/></button>
                            <button onClick={this.increaseBet} ref={button => this.chipColor = button}><Chip chipValue={chips.blue.value} chipColor="blue" chipQuantity={this.state.blue}/></button>
                            <button onClick={this.increaseBet} ref={button => this.chipColor = button}><Chip chipValue={chips.black.value} chipColor="black" chipQuantity={this.state.black}/></button>
                        </form> 
            }
        }

        return (
            <div>
                <button onClick={this.showBetForm}>Bet</button>
                <button>Call</button>
                <button>Check</button>
                <button>Fold</button>
                {displayChipInterface()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    game: state.game
})

export default connect(mapStateToProps)(BetForm)