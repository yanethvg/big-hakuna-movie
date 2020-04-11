import {
    COMENZAR_DESCARGA_PELICULA,
    DESCARGA_PELICULA_EXITOSA,
    DESCARGA_PELICULA_ERROR,
} from '../types';

//cada reducer tiene su propio state
const initialState ={
    error:null,
    loading: false,
    pelicula: {}
}

export default function(state=initialState,action){
    switch (action.type) {
        case COMENZAR_DESCARGA_PELICULA:
            return{
                ...state,
                error:null,
                loading: true,
            }
        case DESCARGA_PELICULA_EXITOSA:
            return{
                ...state,
                pelicula: action.payload,
                error:false,
                loading: false,
            }
        case DESCARGA_PELICULA_ERROR:
            return{
                ...state,
                error: true,
                loading: false,
                pelicula:{}
            }
        default:
            return state;
    }
}