import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { chipValue, distChips } from '../actions/gameActions';
import Chip from '../components/Chip';
import './ChipValueForm.css';

export class ChipValueForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.setValue = this.setValue.bind(this);
        this.state = {
            whiteVal: null,
            whiteCount: null,
            greenVal: null,
            greenCount: null,
            redVal: null,
            redCount: null,
            blueVal: null,
            blueCount: null,
            blackVal: null,
            blackCount: null,
            chipValSet: false,
        }
    }

    onSubmit(event) {
        event.preventDefault();
        
        const {
            whiteVal,
            whiteCount,
            greenVal,
            greenCount,
            redVal,
            redCount,
            blueVal,
            blueCount,
            blackVal,
            blackCount
        } = this.state;

        const chipValues = {
            white: {value: whiteVal, quantity: whiteCount},
            green: {value: greenVal, quantity: greenCount},
            red: {value: redVal, quantity: redCount},
            blue: {value: blueVal, quantity: blueCount},
            black: {value: blackVal, quantity: blackCount}
        }
        this.setState({chipValSet: true});
        this.props.dispatch(chipValue(chipValues));
        this.props.dispatch(distChips());
        
        
        // More than likely won't need this, as submission will take user to another page
        // Might even be better to NOT clear the inputs, so a user can go back and adjust
        // if they desire to do so
        // this.whiteVal.value = '';
        // this.whiteCount.value = '';
        // this.greenVal.value = '';
        // this.greenCount.value = '';
        // this.redVal.value = '';
        // this.redCount.value = '';
        // this.blueVal.value = '';
        // this.blueCount.value = '';
        // this.blackVal.value = '';
        // this.blackCount.value = '';
    }

    setValue(e){
        this.setState({[e.target.id]: e.target.value});
    }



    render() {
        const {chipValSet} = this.state;
        if(chipValSet === true){
            return <Redirect to='/active-game'/>;
        }
        return (
            <form className="chipValue-form" onSubmit={this.onSubmit}>
                
                <div className="chipValue-itemHolder">
                    <Chip chipValue={this.state.whiteVal} chipColor="white"/>
                    
                    <div className="chipValue-input-holder">
                        <label htmlFor="whiteVal">Value</label>
                        <input id="whiteVal" className="chipValue-input" type="number" ref={input => this.whiteVal = input} onChange={ this.setValue }/>
                    </div>

                    <div className="chipValue-input-holder">
                        <label htmlFor="whiteCount">Quantity</label>
                        <input id="whiteCount" className="chipValue-input" type="number" ref={input => this.whiteCount = input} onChange={ this.setValue }/>
                    </div>
                </div>

                <div className="chipValue-itemHolder">
                    <Chip chipValue={this.state.greenVal} chipColor="green"/>
                    
                    <div className="chipValue-input-holder">
                        <label htmlFor="blueVal">Value</label>
                        <input id="greenVal" className="chipValue-input" type="text" ref={input => this.greenVal = input} onChange={ this.setValue }/>
                    </div>

                    <div className="chipValue-input-holder">
                        <label htmlFor="greenCount">Quantity</label>
                        <input id="greenCount" className="chipValue-input" type="text" ref={input => this.greenCount = input} onChange={ this.setValue }/>
                    </div>
                </div>

                <div className="chipValue-itemHolder">
                    <Chip chipValue={this.state.redVal} chipColor="red"/>
                    
                    <div className="chipValue-input-holder">
                        <label htmlFor="redVal">Value</label>
                        <input id="redVal" className="chipValue-input" type="text" ref={input => this.redVal = input} onChange={ this.setValue }/>
                    </div>

                    <div className="chipValue-input-holder">
                        <label htmlFor="redCount">Quantity</label>
                        <input id="redCount" className="chipValue-input" type="text" ref={input => this.redCount = input} onChange={ this.setValue }/>
                    </div>
                </div>

                <div className="chipValue-itemHolder">
                    <Chip chipValue={this.state.blueVal} chipColor="blue"/>
                    
                    <div className="chipValue-input-holder">
                        <label htmlFor="blueVal">Value</label>
                        <input id="blueVal" className="chipValue-input" type="text" ref={input => this.blueVal = input} onChange={ this.setValue }/>
                    </div>

                    <div className="chipValue-input-holder">
                        <label htmlFor="blueCount">Quantity</label>
                        <input id="blueCount" className="chipValue-input" type="text" ref={input => this.blueCount = input} onChange={ this.setValue }/>
                    </div>
                </div>

                <div className="chipValue-itemHolder">
                    <Chip chipValue={this.state.blackVal} chipColor="black"/>
                    
                    <div className="chipValue-input-holder">
                        <label htmlFor="blackVal">Value</label>
                        <input id="blackVal" className="chipValue-input" type="text" ref={input => this.blackVal = input} onChange={ this.setValue }/>
                    </div>

                    <div className="chipValue-input-holder">
                        <label htmlFor="blackCount">Quantity</label>
                        <input id="blackCount" className="chipValue-input" type="text" ref={input => this.blackCount = input} onChange={ this.setValue }/>
                    </div>
                </div>

                <button className="chipValue-button">Add</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    game: state.game
});

export default connect(mapStateToProps)(ChipValueForm);