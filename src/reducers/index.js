import { combineReducers } from 'redux'
import peliculasReducer from './peliculasReducer';
import peliculasAllReducer from './peliculasAllReducer';
import peliculaReducer from './peliculaReducer';

export default combineReducers({
    peliculasReducer,
    peliculasAllReducer,
    peliculaReducer
})