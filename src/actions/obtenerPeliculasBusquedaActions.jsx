import {
    COMENZAR_DESCARGA_PELICULAS_BUSQUEDA,
    DESCARGA_PELICULAS_EXITOSA_BUSQUEDA,
    DESCARGA_PELICULAS_ERROR_BUSQUEDA,
} from '../types';

//obtener listado de productos( consultar API )
export function obtenerPeliculasBusquedaActions(query){
    return (dispatch) => {
        dispatch(comenzarDescargaBusquedaPelicula());
        const urlbusqueda = `https://api.themoviedb.org/3/search/movie?api_key=510e5395ceb2e557cf3fb72141932029&language=en-US&query=${query}&page=1&include_adult=false`

        const urlAll ='https://api.themoviedb.org/3/movie/upcoming?api_key=510e5395ceb2e557cf3fb72141932029&language=en-US&page=1';

        let url ='';
        if(query){
            url = urlbusqueda;
        }else{
            url =urlAll;
        }
        //consultando a la api
        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            //console.log(response.results);
            dispatch(descargaPeliculaBusquedaExitosa(response.results));
        })
        .catch(error => {
            //console.log(error);
            dispatch(descargaPeliculaBusquedaError());
        });
    }
}
export const comenzarDescargaBusquedaPelicula = () =>({
    type: COMENZAR_DESCARGA_PELICULAS_BUSQUEDA
})
export const descargaPeliculaBusquedaExitosa = pelicula =>({
    type: DESCARGA_PELICULAS_EXITOSA_BUSQUEDA,
    payload: pelicula
})
export const descargaPeliculaBusquedaError = () =>({
    type: DESCARGA_PELICULAS_ERROR_BUSQUEDA,
})
