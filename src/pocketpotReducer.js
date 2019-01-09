import {
    ADD_PLAYER
} from '../src/actions/gameActions';




const gameState = {
    loading: false,
    error: null,
    players: [],
    pot: null,
}

export function gameReducer(state = gameState, action){
   if (action.type = ADD_PLAYER){
        return Object.assign({}, state, {
            players: state.players.concat(action.name)
        })
    }

    return state;
}

