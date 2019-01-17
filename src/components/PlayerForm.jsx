import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../actions/gameActions';

export class PlayerForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        
        const playerName = this.textInput.value.trim();

        const newPlayer = {
            name: playerName,
            chips: {
                white: 0,
                green: 0,
                red: 0,
                blue: 0,
                black: 0
            },
            cards: {
                pos1: {
                    value: null,
                    hidden: true
                },
                pos2: {
                    value: null,
                    hidden: true
                }
            },
            status: null
        }
        this.props.dispatch(addPlayer(newPlayer))
        this.textInput.value = '';
    }

    render() {

        return (
            <form className="player-form" onSubmit={this.onSubmit}>
                <input type="text" ref={input => this.textInput = input} />
                <button>Add</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    game: state.game
})

export default connect(mapStateToProps)(PlayerForm)