import {
    ADD_PLAYER,
    CHIP_VALUE,
    ADD_CHIPS
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

    return state;
}