import {
    COMENZAR_DESCARGA_PELICULAS,
    DESCARGA_PELICULAS_EXITOSA,
    DESCARGA_PELICULAS_ERROR,
    COMENZAR_DESCARGA_PELICULAS_PLAYING,
    DESCARGA_PELICULAS_EXITOSA_PLAYING,
    DESCARGA_PELICULAS_ERROR_PLAYING,
} from '../types';

//obtener listado de productos( consultar API )
export function obtenerPeliculasActions(){
    return (dispatch) => {
        dispatch(comenzarDescargaPeliculas());
        //consultando a la api
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=510e5395ceb2e557cf3fb72141932029&language=en-US')
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            dispatch(descargaPeliculasExitosa(response.results.slice(0,5)));
        })
        .catch(error => {
            //console.log(error);
            dispatch(descargaPeliculasError());
        });
    }
}

//obtener listado de productos( consultar API )
export function obtenerPeliculasPlayingActions(){
    return (dispatch) => {
        dispatch(comenzarDescargaPeliculasPlaying());
        //consultando a la api
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=510e5395ceb2e557cf3fb72141932029&language=en-US&page=1')
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            dispatch(descargaPeliculasExitosaPlaying(response.results.slice(0,5)));
        })
        .catch(error => {
            //console.log(error);
            dispatch(descargaPeliculasErrorPlaying());
        });
    }
}
export const comenzarDescargaPeliculas = () =>({
    type: COMENZAR_DESCARGA_PELICULAS
})
export const descargaPeliculasExitosa = peliculas =>({
    type: DESCARGA_PELICULAS_EXITOSA,
    payload: peliculas
})
export const descargaPeliculasError = () =>({
    type: DESCARGA_PELICULAS_ERROR,
})
//playing
export const comenzarDescargaPeliculasPlaying = () =>({
    type: COMENZAR_DESCARGA_PELICULAS_PLAYING
})
export const descargaPeliculasExitosaPlaying = peliculas =>({
    type: DESCARGA_PELICULAS_EXITOSA_PLAYING,
    payload: peliculas
})
export const descargaPeliculasErrorPlaying = () =>({
    type: DESCARGA_PELICULAS_ERROR_PLAYING,
})

