import {
    ADD_PLAYER,
    CHIP_VALUE,
    ADD_CHIPS,
    DIST_CHIPS,
    HAND_OVER,
    MAKE_BET,
    GIVE_CARDS,
    CHANGE_TURN
} from '../src/actions/gameActions';
import { stat } from 'fs';


const gameState = {
    loading: false,
    error: null,
    players: [],
    currentPlayer: null,
    currentTurn: 0,
    chipValues: {
        white: {
            value: 0,
            quantity: 0
        },
        green: {
            value: 0,
            quantity: 0
        },
        red: {
            value: 0,
            quantity: 0
        },
        blue: {
            value: 0,
            quantity: 0
        },
        black: {
            value: 0,
            quantity: 0
        }
    },
    pot: {
        white: 0,
        green: 0,
        red: 0,
        blue: 0,
        black: 0
    },
}

export function gameReducer(state = gameState, action) {
    // Add Players
    if (action.type === ADD_PLAYER) {
        
        let status;

        if(state.players.length === 0){
            status = 'dealer';
        } else if (state.players.length === 1){
            status = 'smallBlind';
        } else if (state.players.length === 2){
            status = 'bigBlind';
        } else {
            status = 'player';
        }

        let newPlayer = action.player;
        newPlayer.status = status;
        const changedState = {
            loading: false,
            error: null,
            players: state.players.concat(newPlayer)
        }
        const newState = { ...state,
            ...changedState
        };
        return newState;
    }
    // Determine value/quantity of chips
    else if (action.type === CHIP_VALUE) {
        const changedState = {
            loading: false,
            error: null,
            chipValues: {
                white: {
                    value: action.values.white.value,
                    quantity: action.values.white.quantity
                },
                green: {
                    value: action.values.green.value,
                    quantity: action.values.green.quantity
                },
                red: {
                    value: action.values.red.value,
                    quantity: action.values.red.quantity
                },
                blue: {
                    value: action.values.blue.value,
                    quantity: action.values.blue.quantity
                },
                black: {
                    value: action.values.black.value,
                    quantity: action.values.black.quantity
                },
            }
        };
        const newState = { ...state,
            ...changedState
        };
        return newState;
    } 
    // Add chips to players inventory
    else if (action.type === ADD_CHIPS) {
        let playerPos;
        for(let i = 0; i < state.players.length; i++){
            if(state.players[i].name === action.chips.name){
                playerPos = i;
            }
        }

        const originalPlayers = state.players.slice();

        const whiteChips = parseFloat(state.players[playerPos].chips.white) + parseFloat(action.chips.chips.white);
        const greenChips = parseFloat(state.players[playerPos].chips.green) + parseFloat(action.chips.chips.green);
        const redChips = parseFloat(state.players[playerPos].chips.red) + parseFloat(action.chips.chips.red);
        const blueChips = parseFloat(state.players[playerPos].chips.blue) + parseFloat(action.chips.chips.blue);
        const blackChips = parseFloat(state.players[playerPos].chips.black) + parseFloat(action.chips.chips.black); 

        console.log(whiteChips)

        originalPlayers[playerPos] = {
            name: action.chips.name,
            chips: {
                white: whiteChips,
                green:  greenChips,
                red:    redChips,
                blue:   blueChips,
                black:  blackChips
            },
            cards: state.players[playerPos].cards,
            status: state.players[playerPos].status
        }

        const newPot = {
            white: 0,
            green: 0,
            red: 0,
            blue: 0,
            black: 0
        }

        const changedState = {
            players: originalPlayers,
            pot: newPot,
            currentPlayer: originalPlayers[playerPos]
        }
        const newState = {...state, ...changedState};
        return newState;
    }
    // Distribute desired chip amounts evenly amongst players
    else if (action.type === DIST_CHIPS){
        const originalPlayers = state.players.slice();
        const playerCount = originalPlayers.length;
        const updatedPlayers = originalPlayers.map((player) => {
            return {
                name: player.name,
                cards: player.cards,
                chips: {
                    white: state.chipValues.white.quantity,
                    green: state.chipValues.green.quantity,
                    red: state.chipValues.red.quantity,
                    blue: state.chipValues.blue.quantity,
                    black: state.chipValues.black.quantity
                },
                status: player.status
            }
        })
        
        const changedState = {
            players: updatedPlayers,
        }
        const newState = {...state, ...changedState};
        return newState;
    }
    // When a hand is finished, chips are awarded/removed and dealer status moves to next player
    else if(action.type === HAND_OVER){


        const updatedPlayers = state.players.slice();
        const playerLength = updatedPlayers.length;
        let pos = 0;
        
        for(let i = 0; i < playerLength; i++){

            if(updatedPlayers[i].status === 'dealer'){
                updatedPlayers[i].status = 'player';
                if(i === playerLength - 1){
                    updatedPlayers[0].status = 'dealer';
                    updatedPlayers[1].status = 'smallBlind';
                    updatedPlayers[2].status = 'bigBlind';
                }
                pos++;
            }
            else if(updatedPlayers[i].status === 'smallBlind'){
                updatedPlayers[i].status = 'dealer';
                if(i === playerLength - 1){
                    updatedPlayers[0].status = 'smallBlind';
                    updatedPlayers[1].status = 'bigBlind';
                }
                pos++;
            }
            else if(updatedPlayers[i].status === 'bigBlind'){
                updatedPlayers[i].status = 'smallBlind';
                if(i === playerLength - 1){
                    updatedPlayers[0].status = 'bigBlind';
                }
                pos++;
            }
            else if(updatedPlayers[i].status === 'player' && pos === 3){
                updatedPlayers[i].status = 'bigBlind';
                pos++;
            }
            else if(updatedPlayers[i].status === 'player' && pos === 4){
                updatedPlayers[i].status = 'player';
                pos++;
            } 
        }


        const changedState = {
            players: updatedPlayers
        };
        const newState = {...state, ...changedState};
        return newState;
    }
    else if(action.type === MAKE_BET){
        const updatedPlayers = state.players.slice();
        let playerPos;
        let player = action.bet.player;
        for(let i = 0; i < updatedPlayers.length; i++){
            if(updatedPlayers[i].name === player){
                playerPos = i;
            }
        }

        const whiteChips = parseFloat(state.players[playerPos].chips.white) - parseFloat(action.bet.chips.white);
        const greenChips = parseFloat(state.players[playerPos].chips.green) - parseFloat(action.bet.chips.green);
        const redChips = parseFloat(state.players[playerPos].chips.red) - parseFloat(action.bet.chips.red);
        const blueChips = parseFloat(state.players[playerPos].chips.blue) - parseFloat(action.bet.chips.blue);
        const blackChips = parseFloat(state.players[playerPos].chips.black) - parseFloat(action.bet.chips.black);

        updatedPlayers[playerPos] = {
            name: action.bet.player,
            status: state.players[playerPos].status,
            chips: {
                white: whiteChips,
                green:  greenChips,
                red:    redChips,
                blue:   blueChips,
                black:  blackChips
            },
            cards: state.players[playerPos].cards
        }

        const whitePot = parseFloat(state.pot.white) + parseFloat(action.bet.chips.white);
        const greenPot = parseFloat(state.pot.green) + parseFloat(action.bet.chips.green);
        const redPot = parseFloat(state.pot.red) + parseFloat(action.bet.chips.red);
        const bluePot = parseFloat(state.pot.blue) + parseFloat(action.bet.chips.blue);
        const blackPot = parseFloat(state.pot.black) + parseFloat(action.bet.chips.black);


        const updatedPot = {
            white: whitePot,
            green: greenPot,
            red: redPot,
            blue: bluePot,
            black: blackPot
        }

        const changedState = {
            players: updatedPlayers,
            pot: updatedPot,
            currentPlayer: updatedPlayers[playerPos]
        }
        const newState = {...state, ...changedState};
        return newState;
    }
    else if(action.type === GIVE_CARDS){
        const originalPlayers = state.players.slice();
        let cardCount = action.cards.length;
        let position = 0;
        const givenCards = action.cards;
        console.log(cardCount);
        const updatedPlayers = originalPlayers.map((player) => {
            const returnObj =  {
                name: player.name,
                chips: player.chips,
                status: player.status,
                cards: {
                    pos1: {
                        value: givenCards[position],
                        hidden: true
                    },
                    pos2: {
                        value: givenCards[position + 1],
                        hidden: true
                    }
                }
            }
            position = position + 2;
            return returnObj;
        });
        const changedState = {
            players: updatedPlayers
        }
        const newState = {...state, ...changedState};
        return newState;
    }

    else if(action.type === CHANGE_TURN){
        const originalPlayers = state.players.slice();
        let changedState;
        if(state.currentPlayer === null && state.currentTurn === 0){
            changedState = {
                currentPlayer: originalPlayers[0],
                currentTurn: 1
            }
        } 
        else if(state.currentTurn >= originalPlayers.length){
            changedState = {
                currentPlayer: null,
                currentTurn: 0
            }
        }
        else {
            changedState = {
                currentPlayer: originalPlayers[state.currentTurn],
                currentTurn: state.currentTurn + 1
            }
        }

        const newState = {...state, ...changedState};
        return newState;
    }

    return state;
}