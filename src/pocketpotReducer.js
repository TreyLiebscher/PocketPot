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

    if (action.type === ADD_PLAYER) {
        const changedState = {
            loading: false,
            error: null,
            players: state.players.concat(action.name)
        }
        const newState = { ...state,
            ...changedState
        };
        return newState;
    } else if (action.type === CHIP_VALUE) {
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
    } else if (action.type === ADD_CHIPS) {
        return state.players.map((player) => {
            if (player.name !== action.chips.name){
                return player;
            }
            return {...player, ...action.chips}
        })

    }

    return state;
}