import React from 'react';
import { URL_BASE_IMG} from '../../types';
import { Link } from 'react-router-dom'

const Pelicula = ({ pelicula }) => {
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
                <Link type="button" class="btn btn-outline-danger my-2 mx-2">Rent</Link>
                <Link to={`/movies/${pelicula.id}`} type="button" className="btn btn-outline-dark my-2 mx-2">See More</Link>
            </div>
        </React.Fragment>
    );
}

export default Pelicula;