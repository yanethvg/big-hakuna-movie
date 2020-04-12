import {
    COMENZAR_DESCARGA_PELICULAS_PLAYING_ALL,
    DESCARGA_PELICULAS_EXITOSA_PLAYING_ALL,
    DESCARGA_PELICULAS_ERROR_PLAYING_ALL,
} from '../types';

//obtener listado de productos( consultar API )
export function obtenerPeliculasPlayingAllActions(){
    return (dispatch) => {
        dispatch(comenzarDescargaPeliculasPlayingAll());
        //consultando a la api
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=510e5395ceb2e557cf3fb72141932029&language=en-US&page=1')
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            dispatch(descargaPeliculasExitosaPlayingAll(response.results));
        })
        .catch(error => {
            //console.log(error);
            dispatch(descargaPeliculasErrorPlayingAll());
        });
    }
}
export const comenzarDescargaPeliculasPlayingAll = () =>({
    type: COMENZAR_DESCARGA_PELICULAS_PLAYING_ALL
})
export const descargaPeliculasExitosaPlayingAll = peliculas =>({
    type: DESCARGA_PELICULAS_EXITOSA_PLAYING_ALL,
    payload: peliculas
})
export const descargaPeliculasErrorPlayingAll = () =>({
    type: DESCARGA_PELICULAS_ERROR_PLAYING_ALL,
})
