import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GAME_CARDS } from './gameCards';
import {giveCards} from '../actions/gameActions';
import './Flop.css'
// TODO import presentational component to sit inside of Flop

export class Flop extends React.Component {
    constructor(props) {
        super(props);
        this.showFlop = this.showFlop.bind(this);
        this.showTurn = this.showTurn.bind(this);
        this.showRiver = this.showRiver.bind(this);
        this.state = {
            cardsDealt: false,
            playerCards: null,
            pos1: {
                value: null,
                hidden: true
            },
            pos2: {
                value: null,
                hidden: true
            },
            pos3: {
                value: null,
                hidden: true
            },
            pos4: {
                value: null,
                hidden: true
            },
            pos5: {
                value: null,
                hidden: true
            }
        }
    }

    drawCard(deck) {
        return Math.floor(Math.random() * Math.floor(deck));
    }

    shuffle(deck){
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    }

    generateCard(number) {
        let returnArray = [];
        // initial shuffle
        let deck = this.shuffle(GAME_CARDS.slice());
        let deckSize = 52;
        let testArray = [];
        // second level shuffle
        for (let i = 0; i < number; i++) {
            const position = this.drawCard(deckSize);
            const card = deck.slice(position, position + 1);
            const removeCard = () => { deck.splice(position, 1); };
            returnArray.push(card);
            testArray.push(position);
            removeCard();
            deckSize = deckSize - 1;
        }
        return returnArray;
    }

    showFlop() {

        const playerLength = this.props.players.length;
        const cardsToDeal = (playerLength * 2) + 5;

        const getCards = this.generateCard(cardsToDeal);
        const dealCards = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(getCards);
            }, 100);
        });

        dealCards.then((cards) => {
            const cardsArray = cards.flat();
            const playerCards = cardsArray.slice(5);
            this.props.dispatch(giveCards(playerCards));
            // TODO: implement the commented out line below
            // this.props.dispatch(setStartingPlayer())
            const testPlayers = playerCards.map((item) => {return {name: item.name, suit: item.suit}})
            console.log(testPlayers)
            this.setState({
                cardsDealt: true,
                playerCards: playerCards, 
                pos1: {
                    value: cardsArray[0],
                    hidden: false
                },
                pos2: {
                    value: cardsArray[1],
                    hidden: false
                },
                pos3: {
                    value: cardsArray[2],
                    hidden: false
                },
                pos4: {
                    value: cardsArray[3],
                    hidden: true
                },
                pos5: {
                    value: cardsArray[4],
                    hidden: true
                }
            })

        });
    }

    showTurn(){
        this.setState({pos4: {
            value: this.state.pos4.value,
            hidden: false
        }})
    }

    showRiver(){
        this.setState({pos5: {
            value: this.state.pos5.value,
            hidden: false
        }})
    }

    render() {

        const turn = () => {
            if(this.state.pos4.hidden === true){
                return <div className="hidden-card"></div>
            } else {
                return <div className="playing-card">
                            <div style={{fontSize: '50px'}}>{this.state.pos4.value.name}</div>
                            <div>
                                <img style={{maxHeight: '50px', maxWidth: '50px'}} src={this.state.pos4.value.image}></img>
                            </div>
                        </div>
            }
        }

        const river = () => {
            if(this.state.pos5.hidden === true){
                return <div className="hidden-card"></div>
            } else {
                return <div className="playing-card">
                            <div style={{fontSize: '50px'}}>{this.state.pos5.value.name}</div>
                            <div>
                                <img style={{maxHeight: '50px', maxWidth: '50px'}} src={this.state.pos5.value.image}></img>
                            </div>
                        </div>
            }
        }

        const flop = () => {
            if (this.state.cardsDealt === true) {
                return  <div style={{display: 'flex', margin: '1em'}}>
                            <div className="playing-card">
                                <div style={{fontSize: '50px'}}>{this.state.pos1.value.name}</div>
                                <div>
                                    <img style={{maxHeight: '50px', maxWidth: '50px'}} src={this.state.pos1.value.image}></img>
                                </div>
                            </div>

                            <div className="playing-card">
                                <div style={{fontSize: '50px'}}>{this.state.pos2.value.name}</div>
                                <div>
                                    <img style={{maxHeight: '50px', maxWidth: '50px'}} src={this.state.pos2.value.image}></img>
                                </div>
                            </div>
                            
                            <div className="playing-card">
                                <div style={{fontSize: '50px'}}>{this.state.pos3.value.name}</div>
                                <div>
                                    <img style={{maxHeight: '50px', maxWidth: '50px'}} src={this.state.pos3.value.image}></img>
                                </div>
                            </div>
                            
                            {turn()}
                            
                            {river()}
                        </div>
            }
        }

        return (
            <div>
                <button onClick={this.showFlop}>FLOP TEST</button>
                <button onClick={this.showTurn}>Show turn</button>
                <button onClick={this.showRiver}>Show river</button> 
                {flop()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    game: state.game
})

export default connect(mapStateToProps)(Flop)