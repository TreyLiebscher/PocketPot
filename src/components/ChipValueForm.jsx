import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chipValue } from '../actions/gameActions';

export class ChipValueForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
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



    render() {

        return (
            <form className="chipValue-form" onSubmit={this.onSubmit}>
                <input type="text" ref={input => this.whiteVal = input} />
                <input type="text" ref={input => this.whiteCount = input} />
                <input type="text" ref={input => this.greenVal = input} />
                <input type="text" ref={input => this.greenCount = input} />
                <input type="text" ref={input => this.redVal = input} />
                <input type="text" ref={input => this.redCount = input} />
                <input type="text" ref={input => this.blueVal = input} />
                <input type="text" ref={input => this.blueCount = input} />
                <input type="text" ref={input => this.blackVal = input} />
                <input type="text" ref={input => this.blackCount = input} />
                <button>Add</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    game: state.game
});

export default connect(mapStateToProps)(ChipValueForm);