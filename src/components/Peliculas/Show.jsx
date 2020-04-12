import React, { useEffect } from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPeliculaActions } from '../../actions/obtenerPeliculaActions';
import { URL_BASE_IMG } from '../../types';
import { v4 as uuidv4 } from 'uuid';
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
   
    const componente = (loading) ? <Spinner></Spinner> : null;
    const imagenPost = pelicula.poster_path ? `${URL_BASE_IMG}${pelicula.poster_path}` : 'https://via.placeholder.com/500?text=No+Image';
    //si se encuentran los generos
    let generos = []
    if (pelicula.genres) {
        generos = pelicula.genres.map(function (el) {
            return el;
        });
    }
    //si se encuentran los compañias de produccion
    let production_companies = []
    if (pelicula.production_companies) {
        production_companies = pelicula.production_companies.map(function (el) {
            return el;
        });
    }
    //si se encuentran los production_countries
    let production_countries = []
    if (pelicula.production_countries) {
        production_countries = pelicula.production_countries.map(function (el) {
            return el;
        });
    }
    //si se encuentran los production_countries
    let spoken_languages = []
    if (pelicula.spoken_languages) {
        spoken_languages = pelicula.spoken_languages.map(function (el) {
            return el.name;
        });
    }
    //para llenar las estrellitas
    const average = (average) => {
        const results = average / 10;
        const starTotal = 5;
        const averageresult = results * starTotal;
        const starPercentage = (averageresult / starTotal) * 100;
        const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
        return starPercentageRounded;
    }


    return (
        <React.Fragment>
            {error
                ? <div className="font-weight-bold alert alert-danger text-center mt-4">
                    Hubo un error..
            </div> : null}
            <div className="card  border-dark m-5" style={{ boxShadow: '10px 10px 5px grey' }}>
                <div className="card-body">
                    <div className="container ">
                        <div className="row  my-5">
                            <div className="col-md-6">
                                <img src={imagenPost} alt="" />
                                <div className="row mt-4">
                                        <div className="col-sm-6">
                                            <h3>Popularity</h3>
                                            <p>Popularity :{pelicula.popularity}</p>
                                            <div className="people" ></div>
                                        </div>
                                        <div className="col-sm-6">
                                            <h3>Average Vote: </h3>
                                            <p>Average: {pelicula.vote_average}</p>
                                            <div className="stars-outer" >
                                                <div className="stars-inner" style={{ width: `${average(pelicula.vote_average)}` }}></div>
                                            </div>
                                        </div>
                                </div>
                                <div className="text-center">
                                    {pelicula.homepage &&
                                        <p>Visit Page <a href={`${pelicula.homepage}`} className="btn btn-outline-danger my-2 mx-2" target="blank">HomePage</a></p>
                                    }
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h4>{pelicula.title}</h4>
                                <p>{pelicula.overview}</p>
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-6">
                                            {generos &&
                                                <React.Fragment>
                                                    <h4>Genres</h4>
                                                    <ul className="movie">
                                                        {generos.map(genero => (
                                                            <li key={genero.id} >{genero.name}</li>
                                                        ))}
                                                    </ul>
                                                </React.Fragment>

                                            }
                                        </div>
                                        <div className="col-md-6">
                                            {spoken_languages &&
                                                <React.Fragment>
                                                    <h4>Language</h4>
                                                    <ul >
                                                        {spoken_languages.map(language => (
                                                            <li key={uuidv4()} > {language}</li>
                                                        ))}
                                                    </ul>
                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            {pelicula.status &&
                                                <React.Fragment>
                                                    <h4>Status</h4>
                                                    <p>{pelicula.status}</p>
                                                </React.Fragment>
                                            }
                                        </div>
                                        <div className="col-sm-8">
                                            {pelicula.tagline &&
                                                <React.Fragment>
                                                    <h4>Tagline:</h4>
                                                    <p>{pelicula.tagline}</p>
                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                    {production_companies &&
                                        <React.Fragment>
                                            <div className="row">
                                                <div className="col-sm-12 ">
                                                    <h4>Production Companies</h4>
                                                    <ul style={{ listStyleType: 'none' }}>
                                                        {production_companies.map(production_companie => (
                                                            <li key={production_companie.id} className="my-1">
                                                                <img src={production_companie.logo_path ? `${URL_BASE_IMG}${production_companie.logo_path}`: 'https://via.placeholder.com/500?text=No+Image'} alt="" width="100" /> &nbsp; {production_companie.name}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    }
                                    {production_countries &&
                                        <React.Fragment>
                                            <div className="row mt-2">
                                                <div className="col">
                                                    <h4>Productions Countries</h4>
                                                    <ul className="movie">
                                                        {production_countries.map(production => (
                                                            <li key={production} >{production.name}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    }
                                    
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