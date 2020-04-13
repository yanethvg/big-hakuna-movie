import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vaciarPeliculaAction } from '../../actions/actualizarStorage'
import '../Carrito/Carrito.css'
import img from '../image/Good.png';
import Peliculas from './Peliculas';
import Pagination from '../Peliculas/Pagination';


const Confirmacion = () => {
    //state locales
    const [currentPage, setCurrentPage] = useState(1);
    const [peliculasPerPage] = useState(3);

    const peliculas = useSelector(state => state.movies.movies)
    const dispatch = useDispatch()
    const vaciarPeliculas = () => dispatch(vaciarPeliculaAction())

    // Get current movies
    const indexOfLastPelicula = currentPage * peliculasPerPage;
    const indexOfFirstPelicula = indexOfLastPelicula - peliculasPerPage;
    const currentPeliculas = peliculas && peliculas.slice(indexOfFirstPelicula, indexOfLastPelicula);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    let sum = peliculas.reduce((acu, val) => {
        let precio_individual = parseFloat(val.precio);
        return acu + parseFloat(precio_individual)
    }, 0)
    return (
        <div className='container' style={{height: '100vh'}}>
            {peliculas.length === 0
                &&
                <div className="text-center mt-5" style={{
                    height: '100vh'
                }}>
                    <img src={img} alt="" /><br />
                        Good
                    </div>
            }
            <Peliculas peliculas={currentPeliculas}></Peliculas>
            {peliculas.length > 0 &&<h4 className="text-center my-5">Total a Pagar: ${sum}</h4>}
            <Pagination
                peliculasPerPage={peliculasPerPage}
                totalPeliculas={peliculas.length}
                paginate={paginate}
                page={'/confirmacion'}
            />
            {peliculas.length > 0 && (
                <React.Fragment>
                    <button
                        className='btn button-custom-vaciar btn-block mt-3'
                        onClick={() => vaciarPeliculas()}
                    >
                        Empty Cart
          </button>
                    <button
                        className='btn button-custom btn-block my-3'
                        onClick={() => vaciarPeliculas()}
                    >
                        Pay
          </button>
                </React.Fragment>
            )}
        </div>
    )
}

export default Confirmacion
