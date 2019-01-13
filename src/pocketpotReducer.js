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
                black:  blackChips,
            }
        }

        const changedState = {
            players: originalPlayers
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
    else if(action.type = HAND_OVER){


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
        console.log(updatedPlayers)

        const changedState = {
            players: updatedPlayers,
        };
        const newState = {...state, ...changedState};
        return newState;
    }

    return state;
}