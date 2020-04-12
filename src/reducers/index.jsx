import { combineReducers } from 'redux'
import peliculasReducer from './peliculasReducer';
import peliculasAllReducer from './peliculasAllReducer';
import peliculaReducer from './peliculaReducer';
import peliculasPlayingReducer from './peliculasPlayingReducer';

export default combineReducers({
    peliculasReducer,
    peliculasAllReducer,
    peliculaReducer,
    peliculasPlayingReducer
})