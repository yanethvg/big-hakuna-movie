import React, { useEffect } from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPeliculaActions } from '../../actions/obtenerPeliculaActions';
import { URL_BASE_IMG } from '../../types';
import Spinner from '../Spinner';

const Show = ({ history, match }) => {
    const id = match.params.id;
    // Mandar llamar a la acción principal para retornar los peliculas
    const dispatch = useDispatch();


    useEffect(
        () => {
            //peliculas cuando el componente este listo
            const cargarpelicula = () => dispatch(obtenerPeliculaActions(id));
            cargarpelicula();
        }, [dispatch]
    );
    //Acceder al state
    const loading = useSelector(state => state.peliculaReducer.loading);
    const error = useSelector(state => state.peliculaReducer.error);
    const pelicula = useSelector(state => state.peliculaReducer.pelicula);
    console.log(pelicula);
    const componente = (loading) ? <Spinner></Spinner> : null;
    //pelicula.genres.map(genero => console.log(genero));
    return (
        <React.Fragment>
            {error
                ? <div className="font-weight-bold alert alert-danger text-center mt-4">
                    Hubo un error..
            </div> : null}

            <div className="container">
                <div className="row  my-5">
                    <div className="col-md-6">
                        <img src={`${URL_BASE_IMG}${pelicula.poster_path}`} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h4>{pelicula.title}</h4>
                        <p>{pelicula.overview}</p>
                       
                        
                    </div>
                </div>
            </div>
            {componente}
        </React.Fragment>
    );
}

export default Show;