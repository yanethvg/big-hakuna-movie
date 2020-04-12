import React, { useEffect } from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPeliculasActions } from '../../actions/obtenerPeliculasActions';
import { obtenerPeliculasPlayingActions } from '../../actions/obtenerPeliculasPlayingActions';
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
            //peliculas playing
            const cargarpeliculasplaying = () =>dispatch(obtenerPeliculasPlayingActions());
            cargarpeliculas();
            cargarpeliculasplaying();
        }, [dispatch]
    );
    //Acceder al state
    const loading = useSelector(state => state.peliculasReducer.loading);
    const error = useSelector(state => state.peliculasReducer.error);
    const peliculasOcurrentes = useSelector(state => state.peliculasReducer.peliculasOcurrentes);
    const peliculasPlaying = useSelector(state => state.peliculasPlayingReducer.peliculasPlaying);
    //console.log(peliculasPlaying);
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
                        <h3>Top Rated </h3>
                        <div className="card-deck">
                            {peliculasOcurrentes.map( pelicula => (
                            <Pelicula
                            key={pelicula.id}
                            pelicula={pelicula}
                            ></Pelicula>
                            ))}
                        </div>
                        <Link  to={'/moviespop'}  type="button" className="btn btn-primary btn-lg btn-block mt-5">More Popular Movies</Link>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h3>Now Playing Movies</h3>
                        <div className="card-deck">
                            {peliculasPlaying.map( pelicula => (
                            <Pelicula
                            key={pelicula.id}
                            pelicula={pelicula}
                            ></Pelicula>
                            ))}
                        </div>
                        <Link  to={'/moviespop'}  type="button" className="btn btn-primary btn-lg btn-block mt-5">More Popular Movies</Link>
                    </div>
                </div>
            </div>
            {componente}
        </React.Fragment>
    );
};

export default Inicio;