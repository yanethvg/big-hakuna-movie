import React from 'react';
import { useDispatch } from 'react-redux';
import {agregarPeliculaAction} from '../../actions/actualizarStorage';
import { URL_BASE_IMG} from '../../types';
import { Link } from 'react-router-dom'

const Pelicula = ({ pelicula}) => {
   // console.log(crearInstancia);
    const dispatch = useDispatch();
    const agregarNuevaPelicula = pelicula => dispatch( agregarPeliculaAction(pelicula) );
    //const peliculas = useSelector((state) => state.movies.movies);
    const guardarReferencia = (pelicula) => {
        const storage ={
            id: pelicula.id,
            img: pelicula.poster_path,
            titulo: pelicula.title,
            descripcion: pelicula.overview,
            precio: 15,
        }
        //console.log(storage);
        agregarNuevaPelicula(storage);
    }
    return (
        <React.Fragment>
            <div className="card border-dark" style={{boxShadow: '10px 10px 5px grey'}}>
                <img src={
                     pelicula.poster_path 
                        ? `${URL_BASE_IMG}${pelicula.poster_path}` 
                        : 'https://via.placeholder.com/500?text=No+Image'} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{pelicula.title}</h5>
                    <p className="card-text">{pelicula.overview.substring(0, 50)}...</p>
                    <p className="card-text"><small className="text-muted">Release: {pelicula.release_date}</small></p>
                </div>
                <button type="button" className="btn btn-outline-danger my-2 mx-2" onClick={() => guardarReferencia(pelicula)} >Rent</button>
                <Link to={`/movies/${pelicula.id}`} type="button" className="btn btn-outline-dark my-2 mx-2">See More</Link>
            </div>
        </React.Fragment>
    );
}

export default Pelicula;