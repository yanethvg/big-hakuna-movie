import React, { useEffect, useState } from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPeliculasBusquedaActions } from '../../actions/obtenerPeliculasBusquedaActions';
import Spinner from '../Spinner';
import Render from '../Peliculas';
import Pagination from '../Peliculas/Pagination';
import img from '../image/found.png';

const Peliculas = () => {
    // Mandar llamar a la acción principal para retornar los peliculas
    //state locales
    const [currentPage, setCurrentPage] = useState(1);
    const [peliculasPerPage] = useState(12);
    const [query, saveQuery] = useState('');
    const dispatch = useDispatch();
    useEffect(
        () => {
            //peliculas cuando el componente este listo
            const cargarpeliculas = () => dispatch(obtenerPeliculasBusquedaActions(query))
            cargarpeliculas();
        }, [dispatch, query]
    );

    //Acceder al state
    const loading = useSelector(state => state.peliculasBusquedaReducer.loading);
    const error = useSelector(state => state.peliculasBusquedaReducer.error);
    const peliculasBusqueda = useSelector(state => state.peliculasBusquedaReducer.peliculas);
    //console.log(peliculas);
    // Get current movies
    const indexOfLastPelicula = currentPage * peliculasPerPage;
    const indexOfFirstPelicula = indexOfLastPelicula - peliculasPerPage;
    const currentPeliculas = peliculasBusqueda && peliculasBusqueda.slice(indexOfFirstPelicula, indexOfLastPelicula);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const componente = (loading) ? <Spinner></Spinner> : null;
    return (
        <React.Fragment>
            {error
                ? <div className="font-weight-bold alert alert-danger text-center mt-4">
                    Hubo un error..
            </div> : null}
            <div className="container mt-5">
                <h3>All Movies</h3>
                <form className="row mb-2 justify-content-center">
                    <div className="col-sm-8">
                        <input className='search form-control' type="text" placeholder="Search" aria-label="Search"
                            onChange={e => saveQuery(e.target.value)} />
                    </div>
                </form>
                <div className="row">
                    <div className="col"  >
                        {(peliculasBusqueda.length === 0 && !loading)
                            &&
                            <div className="text-center" style={{
                                height: '100vh'
                            }}>
                                <img src={img} alt="" /><br />
                        Not Found
                    </div>
                        }
                        <Render peliculas={currentPeliculas} ></Render>
                        <Pagination
                            peliculasPerPage={peliculasPerPage}
                            totalPeliculas={peliculasBusqueda.length}
                            paginate={paginate}
                            page={'/moviesquery'}
                        />
                    </div>
                </div>
            </div>
            {componente}
        </React.Fragment>
    );
};

export default Peliculas;