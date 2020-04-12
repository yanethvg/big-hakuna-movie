import {
    COMENZAR_DESCARGA_PELICULA,
    DESCARGA_PELICULA_EXITOSA,
    DESCARGA_PELICULA_ERROR,
} from '../types';

//obtener listado de productos( consultar API )
export function obtenerPeliculaActions(id){
    return (dispatch) => {
        dispatch(comenzarDescargaPelicula());
        //consultando a la api
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=510e5395ceb2e557cf3fb72141932029`)
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);
            dispatch(descargaPeliculaExitosa(response));
        })
        .catch(error => {
            //console.log(error);
            dispatch(descargaPeliculaError());
        });
    }
}
export const comenzarDescargaPelicula = () =>({
    type: COMENZAR_DESCARGA_PELICULA
})
export const descargaPeliculaExitosa = pelicula =>({
    type: DESCARGA_PELICULA_EXITOSA,
    payload: pelicula
})
export const descargaPeliculaError = () =>({
    type: DESCARGA_PELICULA_ERROR,
})
