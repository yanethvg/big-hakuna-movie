import React, { useEffect, useState } from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPeliculaActions } from '../../actions/obtenerPeliculaActions';
import { URL_BASE_IMG } from '../../types';
import Spinner from '../Spinner';
import './Show.css'

const Show = ({ history, match }) => {
    const id = match.params.id;
    // Mandar llamar a la acción principal para retornar los peliculas
    const dispatch = useDispatch();
    useEffect(
        () => {

            //peliculas cuando el componente este listo
            const cargarpelicula = () => dispatch(obtenerPeliculaActions(id));
            cargarpelicula();
        }, [dispatch, id]
    );
    //Acceder al state
    const loading = useSelector(state => state.peliculaReducer.loading);
    const error = useSelector(state => state.peliculaReducer.error);
    const pelicula = useSelector(state => state.peliculaReducer.pelicula);
    console.log(pelicula);
    const componente = (loading) ? <Spinner></Spinner> : null;
    const imagenPost = pelicula.poster_path ? `${URL_BASE_IMG}${pelicula.poster_path}` : 'https://via.placeholder.com/500?text=No+Image';
    //pelicula.genres.map(genero => console.log(genero));
    const average = (average) => {
        const results = average/10;
        const starTotal = 5;
        const averageresult = results * starTotal;
        const starPercentage = (averageresult/ starTotal) * 100;
        const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
        return starPercentageRounded;
    }
   
    return (
        <React.Fragment>
            {error
                ? <div className="font-weight-bold alert alert-danger text-center mt-4">
                    Hubo un error..
            </div> : null}
            <div className="card  border-dark m-5" style={{boxShadow: '10px 10px 5px grey'}}>
                <div className="card-body">
                    <div className="container ">
                        <div className="row  my-5">
                            <div className="col-md-6">
                                <img src={imagenPost} alt="" />
                            </div>
                            <div className="col-md-6">
                                <h4>{pelicula.title}</h4>
                                <p>{pelicula.overview}</p>
                                <div className="text-center">
                                    {pelicula.homepage && 
                                    <p>Visit Page <a href={`${pelicula.homepage}`} className="btn btn-outline-danger my-2 mx-2" target="blank">HomePage</a></p>
                                    }
                                    <h3>Tagline:</h3>
                                    <p>{pelicula.tagline}</p>
                                    <h3>Status</h3>
                                    <p>{pelicula.status}</p>
                                    <h3>Popularity</h3>
                                    <p>Popularidad :{pelicula.popularity}</p>
                                    <div className="people" ></div>
                                    <h3>Average Vote: </h3>
                                    <div className="stars-outer" >
                                        <div className="stars-inner" style={{width: `${average(pelicula.vote_average)}`}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {componente}
        </React.Fragment>
    );
}

export default Show;