import {
    COMENZAR_DESCARGA_PELICULAS_PLAYING_ALL,
    DESCARGA_PELICULAS_EXITOSA_PLAYING_ALL,
    DESCARGA_PELICULAS_ERROR_PLAYING_ALL,
} from '../types';

//cada reducer tiene su propio state
const initialState ={
    peliculasAll:[],
    error:null,
    loading: false,
}

export default function(state=initialState,action){
    switch (action.type) {
        case COMENZAR_DESCARGA_PELICULAS_PLAYING_ALL:
            return{
                ...state,
                error:null,
                loading: true,
            }
        case DESCARGA_PELICULAS_EXITOSA_PLAYING_ALL:
            return{
                ...state,
                peliculasAll: action.payload,
                error:false,
                loading: false,
            }
        case DESCARGA_PELICULAS_ERROR_PLAYING_ALL:
            return{
                ...state,
                peliculasAll: [],
                error: true,
                loading: false,
            }
        default:
            return state;
    }
}