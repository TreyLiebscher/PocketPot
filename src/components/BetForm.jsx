import React, {Component} from 'react';
import { connect } from 'react-redux';
import { makeBet } from '../actions/gameActions';

class BetForm extends React.Component {

    onSubmit(event) {
        event.preventDefault();
        
        console.log('kiwi submit')
    }



    render(){
        return (
            <form className="bet-form" onSubmit={this.onSubmit}>
            
            </form>
        )
    }
}

const mapStateToProps = state => ({
    game: state.game
})

export default connect(mapStateToProps)(BetForm)