import React, { useEffect } from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPeliculasActions } from '../../actions/obtenerPeliculasActions';
import Spinner from '../Spinner';
import Pelicula from '../Peliculas/Pelicula';
import { Link } from 'react-router-dom'

const Inicio= () => {
    // Mandar llamar a la acción principal para retornar los peliculas
    const dispatch = useDispatch();
    useEffect(
        () => {
            //peliculas cuando el componente este listo
            const cargarpeliculas = () => dispatch(obtenerPeliculasActions());
            cargarpeliculas();
        }, [dispatch]
    );
    //Acceder al state
    const loading = useSelector(state => state.peliculasReducer.loading);
    const error = useSelector(state => state.peliculasReducer.error);
    const peliculas = useSelector(state => state.peliculasReducer.peliculasOcurrentes);
    //console.log(peliculas);
    const componente = (loading) ? <Spinner></Spinner> : null;
    return (
        <React.Fragment>
            {error
                ? <div className="font-weight-bold alert alert-danger text-center mt-4">
                    Hubo un error..
            </div> : null}
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h3> Movies </h3>
                        <div className="card-deck">
                            {peliculas.map( pelicula => (
                            <Pelicula
                            key={pelicula.id}
                            pelicula={pelicula}
                            ></Pelicula>
                            ))}
                        </div>
                        <Link  to={'/movies'}  type="button" className="btn btn-primary btn-lg btn-block mt-5">More Movies</Link>
                    </div>
                </div>
            </div>
            {componente}
        </React.Fragment>
    );
};

export default Inicio;