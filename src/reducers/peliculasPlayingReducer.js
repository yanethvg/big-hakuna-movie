import {
    COMENZAR_DESCARGA_PELICULAS_PLAYING,
    DESCARGA_PELICULAS_EXITOSA_PLAYING,
    DESCARGA_PELICULAS_ERROR_PLAYING,
} from '../types';

//cada reducer tiene su propio state
const initialState ={
    peliculasPlaying:[],
    error:null,
}

export default function(state=initialState,action){
    switch (action.type) {
        case COMENZAR_DESCARGA_PELICULAS_PLAYING:
            return{
                ...state,
                error:null,
            }
        case DESCARGA_PELICULAS_EXITOSA_PLAYING:
            return{
                ...state,
                peliculasPlaying: action.payload,
                error:false,
            }
        case DESCARGA_PELICULAS_ERROR_PLAYING:
            return{
                ...state,
                peliculasPlaying: [],
                error: true,
            }
        default:
            return state;
    }
}