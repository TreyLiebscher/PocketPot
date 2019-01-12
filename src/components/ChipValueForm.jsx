import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chipValue } from '../actions/gameActions';
import Chip from '../components/Chip';

export class ChipValueForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.setValue = this.setValue.bind(this);
        this.state = {
            whiteVal: null,
            greenVal: null,
            redVal: null,
            blueVal: null,
            blackVal: null
        }
    }

    onSubmit(event) {
        event.preventDefault();
        
        const whiteVal = this.whiteVal.value.trim();
        const whiteCount = this.whiteCount.value.trim();
        const greenVal = this.greenVal.value.trim();
        const greenCount = this.greenCount.value.trim();
        const redVal = this.redVal.value.trim();
        const redCount = this.redCount.value.trim();
        const blueVal = this.blueVal.value.trim();
        const blueCount = this.blueCount.value.trim();
        const blackVal = this.blackVal.value.trim();
        const blackCount = this.blackCount.value.trim();

        const chipValues = {
            white: {value: whiteVal, quantity: whiteCount},
            green: {value: greenVal, quantity: greenCount},
            red: {value: redVal, quantity: redCount},
            blue: {value: blueVal, quantity: blueCount},
            black: {value: blackVal, quantity: blackCount}
        }

        this.props.dispatch(chipValue(chipValues))
        
        this.whiteVal.value = '';
        this.whiteCount.value = '';
        this.greenVal.value = '';
        this.greenCount.value = '';
        this.redVal.value = '';
        this.redCount.value = '';
        this.blueVal.value = '';
        this.blueCount.value = '';
        this.blackVal.value = '';
        this.blackCount.value = '';
    }

    setValue(e){
        console.log(e.target.id);
        this.setState({[e.target.id]: e.target.value});
    }



    render() {

        return (
            <form className="chipValue-form" onSubmit={this.onSubmit}>
                
                <Chip chipValue={this.state.whiteVal} chipColor="white"/>
                <label htmlFor="whiteVal">Value</label>
                <input id="whiteVal" type="number" ref={input => this.whiteVal = input} onChange={ this.setValue }/>
                
                <label htmlFor="whiteCount">Quantity</label>
                <input id="whiteCount" type="number" ref={input => this.whiteCount = input}/>
                
                <Chip chipValue={this.state.greenVal} chipColor="green"/>
                <label htmlFor="blueVal">Value</label>
                <input id="greenVal" type="text" ref={input => this.greenVal = input} onChange={ this.setValue }/>
                

                <label htmlFor="greenCount">Quantity</label>
                <input id="greenCount" type="text" ref={input => this.greenCount = input} />
                
                <Chip chipValue={this.state.redVal} chipColor="red"/>
                <label htmlFor="redVal">Value</label>
                <input id="redVal" type="text" ref={input => this.redVal = input} onChange={ this.setValue }/>
                
                <label htmlFor="redCount">Quantity</label>
                <input id="redCount" type="text" ref={input => this.redCount = input} />
                
                <Chip chipValue={this.state.blueVal} chipColor="blue"/>
                <label htmlFor="blueVal">Value</label>
                <input id="blueVal" type="text" ref={input => this.blueVal = input} onChange={ this.setValue }/>
                
                <label htmlFor="blueCount">Quantity</label>
                <input id="blueCount" type="text" ref={input => this.blueCount = input} />
                
                <Chip chipValue={this.state.blackVal} chipColor="black"/>
                <label htmlFor="blackVal">Value</label>
                <input id="blackVal" type="text" ref={input => this.blackVal = input} onChange={ this.setValue }/>
                
                <label htmlFor="blackCount">Quantity</label>
                <input id="blackCount" type="text" ref={input => this.blackCount = input} />
                
                <button>Add</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    game: state.game
});

export default connect(mapStateToProps)(ChipValueForm);