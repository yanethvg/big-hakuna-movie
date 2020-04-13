import { combineReducers } from 'redux'
import peliculasReducer from './peliculasReducer';
import peliculasAllReducer from './peliculasAllReducer';
import peliculaReducer from './peliculaReducer';
import peliculasPlayingReducer from './peliculasPlayingReducer';
import peliculasBusquedaReducer from './peliculasBusquedaReducer';
import peliculasStorageReducer from './peliculasStorageReducer';

export default combineReducers({
    peliculasReducer,
    peliculasAllReducer,
    peliculaReducer,
    peliculasPlayingReducer,
    peliculasBusquedaReducer,
    movies: peliculasStorageReducer,
})