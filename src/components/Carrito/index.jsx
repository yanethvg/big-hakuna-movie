import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import img from '../image/cart.png'
import { URL_BASE_IMG } from '../../types';
import { vaciarPeliculaAction } from '../../actions/actualizarStorage';
import { Link } from 'react-router-dom'
import './Carrito.css'

const Carrito = () => {
    //obtener las citas del state
    const dispatch = useDispatch();
    const peliculas = useSelector((state) => state.movies.movies);
    const vaciarPeliculas = () => dispatch(vaciarPeliculaAction());
    // console.log(peliculas);
    let sum = peliculas.reduce((acu, val) => {
        let precio_individual = parseFloat(val.precio);
        return acu + parseFloat(precio_individual)
    }, 0)
    
    return (
        <React.Fragment>
            <div className="carrito-compras ">
                <img src={img} className="img-carrito" alt="" />
                <div className="oculto contenido">
                    <table id="lista-carrito" >
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {peliculas.map((pelicula, index) => (
                                <tr key={index}>
                                    <td>
                                        <img src={pelicula.img ? `${URL_BASE_IMG}${pelicula.img}`: 'https://via.placeholder.com/500?text=No+Image'} alt="" width="50" />
                                    </td>
                                    <td>{pelicula.titulo}</td>
                                    <td>$ {pelicula.precio}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h4 className="text-center">Total a pagar:  ${sum} </h4>
                    {peliculas.length > 0 &&
                        <React.Fragment>
                            <button className="btn button-custom-vaciar btn-block" onClick={() => vaciarPeliculas()}>Empty Cart</button>
                            <Link to={'/confirmacion'} className="btn button-custom btn-block">Place Orders</Link>
                        </React.Fragment>
                    }
                </div>
            </div>
        </React.Fragment>

    )

}

export default Carrito;