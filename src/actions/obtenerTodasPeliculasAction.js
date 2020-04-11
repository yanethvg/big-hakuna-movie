import {
    COMENZAR_DESCARGA_PELICULAS_ALL,
    DESCARGA_PELICULAS_EXITOSA_ALL,
    DESCARGA_PELICULAS_ERROR_ALL,
} from '../types';

//obtener listado de productos( consultar API )
export function obtenerPeliculasAllActions(){
    return (dispatch) => {
        dispatch(comenzarDescargaAllPeliculas());
        //consultando a la api
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=510e5395ceb2e557cf3fb72141932029&language=en-US')
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            dispatch(descargaPeliculasAllExitosa(response.results));
        })
        .catch(error => {
            //console.log(error);
            dispatch(descargaPeliculasAllError());
        });
    }
}
export const comenzarDescargaAllPeliculas = () =>({
    type: COMENZAR_DESCARGA_PELICULAS_ALL
})
export const descargaPeliculasAllExitosa = peliculas =>({
    type: DESCARGA_PELICULAS_EXITOSA_ALL,
    payload: peliculas
})
export const descargaPeliculasAllError = () =>({
    type: DESCARGA_PELICULAS_ERROR_ALL,
})
