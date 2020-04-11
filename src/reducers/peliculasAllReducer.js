import {
    COMENZAR_DESCARGA_PELICULAS_ALL,
    DESCARGA_PELICULAS_EXITOSA_ALL,
    DESCARGA_PELICULAS_ERROR_ALL,
} from '../types';

//cada reducer tiene su propio state
const initialState ={
    peliculas:[],
    error:null,
    loading: false,
}

export default function(state=initialState,action){
    switch (action.type) {
        case COMENZAR_DESCARGA_PELICULAS_ALL:
            return{
                ...state,
                error:null,
                loading: true,
            }
        case DESCARGA_PELICULAS_EXITOSA_ALL:
            return{
                ...state,
                peliculas: action.payload,
                error:false,
                loading: false,
            }
        case DESCARGA_PELICULAS_ERROR_ALL:
            return{
                ...state,
                peliculas: [],
                error: true,
                loading: false,
            }
        default:
            return state;
    }
}