import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {gameReducer} from './pocketpotReducer';


const store = createStore(
    combineReducers({
        game: gameReducer
    }),
    applyMiddleware(thunk)
);




export default store;
