import React from 'react';
import { URL_BASE_IMG, URL_BASE_IMG_DESCRIPCION } from '../../types';
import { Link } from 'react-router-dom'

const Pelicula = ({ pelicula }) => {
    return (
        <React.Fragment>
            <div className="card">
                <img src={`${URL_BASE_IMG}${pelicula.poster_path}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{pelicula.title}</h5>
                    <p className="card-text">{pelicula.overview.substring(0, 50)}...</p>
                    <p className="card-text"><small className="text-muted">Release: {pelicula.release_date}</small></p>
                </div>
                <Link to={`/movies/${pelicula.id}`} type="button" className="btn btn-info ">See More</Link>
            </div>
        </React.Fragment>
    );
}

export default Pelicula;