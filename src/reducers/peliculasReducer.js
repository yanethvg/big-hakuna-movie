import {
    COMENZAR_DESCARGA_PELICULAS,
    DESCARGA_PELICULAS_EXITOSA,
    DESCARGA_PELICULAS_ERROR,
} from '../types';

//cada reducer tiene su propio state
const initialState ={
    peliculas:[],
    error:null,
    loading: false,
    pelicula: {}
}

export default function(state=initialState,action){
    switch (action.type) {
        case COMENZAR_DESCARGA_PELICULAS:
            return{
                ...state,
                error:null,
                loading: true,
                pelicula:{}
            }
        case DESCARGA_PELICULAS_EXITOSA:
            return{
                ...state,
                peliculas: action.payload,
                error:false,
                loading: false,
                pelicula:{}
            }
        case DESCARGA_PELICULAS_ERROR:
            return{
                ...state,
                peliculas: [],
                error: true,
                loading: false,
                pelicula:{}
            }
        default:
            return state;
    }
}