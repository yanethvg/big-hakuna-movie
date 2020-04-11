import {
    COMENZAR_DESCARGA_PELICULAS,
    DESCARGA_PELICULAS_EXITOSA,
    DESCARGA_PELICULAS_ERROR
} from '../types';

//obtener listado de productos( consultar API )
export function obtenerPeliculasActions(){
    return (dispatch) => {
        dispatch(comenzarDescargaPeliculas());
        //consultando a la api
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=510e5395ceb2e557cf3fb72141932029&language=en-US&page=1')
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response.results);
            dispatch(descargaPeliculasExitosa(response.results));
        })
        .catch(error => {
            console.log(error);
            dispatch(descargaPeliculasError());
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