import {
    COMENZAR_DESCARGA_PELICULAS_PLAYING,
    DESCARGA_PELICULAS_EXITOSA_PLAYING,
    DESCARGA_PELICULAS_ERROR_PLAYING,
} from '../types';

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
