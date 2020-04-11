import { combineReducers } from 'redux'
import peliculasReducer from './peliculasReducer';
import peliculasAllReducer from './peliculasAllReducer';

export default combineReducers({
    peliculasReducer,
    peliculasAllReducer
})