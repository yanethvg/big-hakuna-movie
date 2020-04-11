import React from 'react';
import { Link } from 'react-router-dom'
import { URL_BASE_IMG } from '../../types';

const Pelicula = ({ pelicula }) => {
    return (
        <div className="card">
            <img src={`${URL_BASE_IMG}${pelicula.poster_path}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{pelicula.title}</h5>
                <p className="card-text">{pelicula.overview.substring(0, 50)}...</p>
                <p className="card-text"><small className="text-muted">Release: {pelicula.release_date}</small></p>
            </div>
            <button type="button" className="btn btn-secondary">See More</button>
        </div>
    );
}

export default Pelicula;