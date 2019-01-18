import React, {Component} from 'react';
import { connect } from 'react-redux';
import { makeBet } from '../actions/gameActions';
import Chip from './Chip';
class BetForm extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
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
        const player = this.props.player.name;
        const {white, green, red, blue, black} = this.state;
        const bet = {
            player: player,
            chips: {
                white: white,
                green: green,
                red: red,
                blue: blue,
                black: black
            }
        }
        
        this.props.dispatch(makeBet(bet))
        this.setState({
            makeBet: false,
            white: 0,
            green: 0,
            red: 0,
            blue: 0,
            black: 0,
        })
        console.log('kiwi submit', player);
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

        const playerChips = this.props.player.chips;

        if(e.target.id === 'white'){
            if(white < playerChips.white) {
                this.setState({[e.target.id]: white + 1})
            }
        }
        else if(e.target.id === 'green'){
            if(green < playerChips.green){
                this.setState({[e.target.id]: green + 1})
            }
        }
        else if(e.target.id === 'red'){
            if(red < playerChips.red){
                this.setState({[e.target.id]: red + 1})
            }
        }
        else if(e.target.id === 'blue'){
            if(blue < playerChips.blue){
                this.setState({[e.target.id]: blue + 1})
            }
        }
        else if(e.target.id === 'black'){
            if(black < playerChips.black){
                this.setState({[e.target.id]: black + 1})
            }
        }

        // function getTotal(total, val) {
        //     return total + val;
        // }

        // const whiteVal = parseFloat(this.props.game.chipValues.white.value) * white;
        // const greenVal = parseFloat(this.props.game.chipValues.green.value) * green;
        // const redVal =   parseFloat(this.props.game.chipValues.red.value) * red;
        // const blueVal =  parseFloat(this.props.game.chipValues.blue.value) * blue;
        // const blackVal = parseFloat(this.props.game.chipValues.black.value) * black;
        // const total = [whiteVal, greenVal, redVal, blueVal, blackVal].reduce(getTotal);
        // this.setState({totalBet: total})
    }

    render(){
        const chips = this.props.game.chipValues;

        const getTotal = (total, val) => {
            return total + val;
        }

        const displayTotalBet = () => {
            const whiteVal = chips.white.value * this.state.white;
            const greenVal = chips.green.value * this.state.green;
            const redVal = chips.red.value * this.state.red;
            const blueVal = chips.blue.value * this.state.blue;
            const blackVal = chips.black.value * this.state.black;
            const total = [whiteVal, greenVal, redVal, blueVal, blackVal].reduce(getTotal);
            const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
            return currency.format(total);
        }

        const displayChipInterface = () => {
            if(this.state.makeBet === true){
                return  <form className="bet-form" onSubmit={this.onSubmit}>
                            <div>{displayTotalBet()}</div>
                            <button type="button" onClick={this.increaseBet} ref={button => this.chipColor = button}><Chip chipValue={chips.white.value} chipColor="white" chipQuantity={this.state.white}/></button>
                            <button type="button" onClick={this.increaseBet} ref={button => this.chipColor = button}><Chip chipValue={chips.green.value} chipColor="green" chipQuantity={this.state.green}/></button>
                            <button type="button" onClick={this.increaseBet} ref={button => this.chipColor = button}><Chip chipValue={chips.red.value} chipColor="red" chipQuantity={this.state.red}/></button>
                            <button type="button" onClick={this.increaseBet} ref={button => this.chipColor = button}><Chip chipValue={chips.blue.value} chipColor="blue" chipQuantity={this.state.blue}/></button>
                            <button type="button" onClick={this.increaseBet} ref={button => this.chipColor = button}><Chip chipValue={chips.black.value} chipColor="black" chipQuantity={this.state.black}/></button>
                            <button>SUBMIT</button>
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