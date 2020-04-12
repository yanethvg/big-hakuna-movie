import {
    COMENZAR_DESCARGA_PELICULAS,
    DESCARGA_PELICULAS_EXITOSA,
    DESCARGA_PELICULAS_ERROR,
    COMENZAR_DESCARGA_PELICULAS_PLAYING,
    DESCARGA_PELICULAS_EXITOSA_PLAYING,
    DESCARGA_PELICULAS_ERROR_PLAYING,
} from "../types";

//cada reducer tiene su propio state
const initialState = {
    peliculasOcurrentes: [],
    peliculasPlaying:[],
    error: null,
    loading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case COMENZAR_DESCARGA_PELICULAS:
            return {
                ...state,
                error: null,
                loading: true,
            };
        case DESCARGA_PELICULAS_EXITOSA:
            return {
                ...state,
                peliculasOcurrentes: action.payload,
                error: false,
                loading: false,
            };
        case DESCARGA_PELICULAS_ERROR:
            return {
                ...state,
                peliculasOcurrentes: [],
                error: true,
                loading: false,
            };
        case COMENZAR_DESCARGA_PELICULAS_PLAYING:
            return {
                ...state,
                error: null,
                loading: true,
            };
        case DESCARGA_PELICULAS_EXITOSA_PLAYING:
            return {
                ...state,
                peliculasPlaying: action.payload,
                error: false,
                loading: false,
            };
        case DESCARGA_PELICULAS_ERROR_PLAYING:
            return {
                ...state,
                peliculasPlaying: [],
                error: true,
                loading: false,
            };
        default:
            return state;
    }
}
