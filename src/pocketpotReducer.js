import {
    ADD_PLAYER,
    CHIP_VALUE,
    ADD_CHIPS,
    DIST_CHIPS,
    HAND_OVER
} from '../src/actions/gameActions';


const gameState = {
    loading: false,
    error: null,
    players: [],
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
    dealer: null,
    counter: 0,
    smallBlind: null,
    bigBlind: null,
    pot: null,
}

export function gameReducer(state = gameState, action) {
    // Add Players
    if (action.type === ADD_PLAYER) {
        const changedState = {
            loading: false,
            error: null,
            players: state.players.concat(action.player)
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

        originalPlayers[playerPos] = {
            name: action.chips.name,
            chips: {
                white: state.players[playerPos].chips.white + action.chips.chips.white,
                green: state.players[playerPos].chips.green + action.chips.chips.green,
                red: state.players[playerPos].chips.red + action.chips.chips.red,
                blue: state.players[playerPos].chips.blue + action.chips.chips.blue,
                black: state.players[playerPos].chips.black + action.chips.chips.black,
            }
        }

        const changedState = {
            players: originalPlayers
        }
        const newState = {...state, ...changedState};
        return newState;
    }

    else if (action.type === DIST_CHIPS){
        const originalPlayers = state.players.slice();
        const playerCount = originalPlayers.length;
        const updatedPlayers = originalPlayers.map((player) => {
            return {
                name: player.name,
                chips: {
                    white: Math.floor(state.chipValues.white.quantity / playerCount),
                    green: Math.floor(state.chipValues.green.quantity / playerCount),
                    red: Math.floor(state.chipValues.red.quantity / playerCount),
                    blue: Math.floor(state.chipValues.blue.quantity / playerCount),
                    black: Math.floor(state.chipValues.black.quantity / playerCount)
                }
            }
        })
        const countCheck = () => {
            if(state.counter >= state.players.length){
                return 0;
            } else {
                return state.counter;
            }
        }
        let localCounter = state.counter;
        let smallBlindPos = localCounter + 1;
        let bigBlindPos = localCounter + 2;


        const changedState = {
            counter: countCheck(),
            players: updatedPlayers,
            dealer: updatedPlayers[state.counter],
            smallBlind: updatedPlayers[smallBlindPos],
            bigBlind: updatedPlayers[bigBlindPos]
        }
        const newState = {...state, ...changedState};
        return newState;
    }

    else if(action.type = HAND_OVER){
        const updatedPlayers = state.players.slice();
        // const countCheck = () => {return state.counter >= state.players.length ? 0 : state.counter + 1};
        
        let smallBlindPos = state.counter + 1;
        let move = state.counter + 1;
        let bigBlindPos = state.counter + 2;
        if(state.counter >= updatedPlayers.length){
            bigBlindPos = 0;
        }

        const changedState = {
            counter: move,
            players: updatedPlayers,
            dealer: updatedPlayers[state.counter],
            smallBlind: updatedPlayers[smallBlindPos++],
            bigBlind: updatedPlayers[bigBlindPos++]
        };
        const newState = {...state, ...changedState};
        return newState;
    }

    return state;
}