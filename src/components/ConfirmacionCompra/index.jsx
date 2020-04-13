import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { URL_BASE_IMG } from '../../types'
import { vaciarPeliculaAction } from '../../actions/actualizarStorage'
import '../Carrito/Carrito.css'
import img from '../image/Good.png';
const Confirmacion = () => {
    const peliculas = useSelector(state => state.movies.movies)
    const dispatch = useDispatch()
    const vaciarPeliculas = () => dispatch(vaciarPeliculaAction())
    //console.log(peliculas);
    return (
        <div className='container'>
            {peliculas.length === 0
                &&
                <div className="text-center mt-5">
                    <img src={img} alt="" /><br />
                        Good
                    </div>
            }
            {peliculas.map((pelicula, index) => (
                <div
                    className='card border-dark mt-3'
                    style={{ boxShadow: '10px 10px 5px grey' }}
                    key={index}
                >
                    <div className='card-body'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-sm-4 ext-center'>
                                    <img
                                        src={
                                            pelicula.img
                                                ? `${URL_BASE_IMG}${pelicula.img}`
                                                : 'https://via.placeholder.com/500?text=No+Image'
                                        }
                                        alt=''
                                        width='100'
                                    />
                                </div>
                                <div className='col-sm-8'>
                                    <h3>{pelicula.titulo}</h3>
                                    <h4>Precio: ${pelicula.precio}</h4>
                                    <p>{pelicula.descripcion}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {peliculas.length > 0 && (
                <React.Fragment>
                    <button
                        className='btn button-custom-vaciar btn-block mt-3'
                        onClick={() => vaciarPeliculas()}
                    >
                        Empty Cart
          </button>
                    <button
                        className='btn button-custom btn-block mt-3'
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
