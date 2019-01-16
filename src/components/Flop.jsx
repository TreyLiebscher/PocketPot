import React, { Component } from 'react';
import { GAME_CARDS } from './gameCards';
// TODO import presentational component to sit inside of Flop

export class Flop extends React.Component {
    constructor(props) {
        super(props);
        this.showFlop = this.showFlop.bind(this);
        this.state = {
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

    drawCard() {

        return Math.floor(Math.random() * Math.floor(51));
    }

    validateCard(array, item){
        if(array.length === 0){
            return item;
        }

        let card;

        for(let i = 0; i < array.length; i++){
            if(array[i] == item){
                card = this.drawCard();
            } else {
                card = item;
            }
        }

        return card;
    }

    generateCard(number) {
        let returnArray = [];
        let deck = GAME_CARDS.slice();
        let testArray = [];
        for (let i = 0; i < number; i++) {
            const position2 = this.drawCard();
            const position = this.validateCard(testArray, position2);
            console.log(position);
            const card = deck.slice(position, position + 1);
            const removeCard = () => {deck.splice(position, 1);};
            const drawCard = new Promise(function(resolve, reject) {
                setTimeout(function() {
                  resolve(returnArray.push(card));
                }, 100);
            });

            drawCard.then(() => {
                removeCard();
            });

            testArray.push(position)
            returnArray.push(card);

            console.log('kiwi deck is %s', deck.length)
            // if(i === number){
            //     deck = GAME_CARDS;
            // }
        }

        console.log(testArray)

        return returnArray;
    }

    showFlop() {
        console.log(this.props.players.length)
        // const cardsArray = this.generateCard(17);
        const getCards = this.generateCard(17);
        const dealCards = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(getCards);
            }, 100);
        });
        console.log(GAME_CARDS.length)

        dealCards.then((cards) => {
            const cardsArray = cards.flat()
            console.log('cards are', cardsArray)
            return cardsArray;
        })

        // console.log('kiwi, flop is being shown', cardsArray);





        // this.setState({
        //     pos1: {
        //         value: cardsArray[0],
        //         hidden: false
        //     },
        //     pos2: {
        //         value: cardsArray[1],
        //         hidden: false
        //     },
        //     pos3: {
        //         value: cardsArray[2],
        //         hidden: false
        //     }
        // })
    }

    render() {
        return (
            <div>
                <button onClick={this.showFlop}>FLOP TEST</button>
                <button onClick={this.drawCard}>COUNT TEST</button>

            </div>
        )
    }
}

export default Flop;