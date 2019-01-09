import {createStore} from 'redux';
import {gameReducer} from './pocketpotReducer';

export default createStore(gameReducer);
