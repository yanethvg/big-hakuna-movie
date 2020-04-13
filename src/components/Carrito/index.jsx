import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import img from '../image/cart.png'
import img2 from '../image/curso1.jpg';
import { URL_BASE_IMG } from '../../types';
import {vaciarPeliculaAction} from '../../actions/actualizarStorage';
import './Carrito.css'

const Carrito = () => {
     //obtener las citas del state
     const dispatch = useDispatch();
     const peliculas = useSelector((state) => state.movies.movies);
     const vaciarPeliculas = () => dispatch( vaciarPeliculaAction() );
    // console.log(peliculas);
    return (
        <React.Fragment>
            <div className="carrito-compras">
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
                          {peliculas.map((pelicula,index )=> (
                              <tr key={index}>
                                  <td>
                                      <img src={`${URL_BASE_IMG}${pelicula.img}`} alt="" width="50"/>
                                  </td>
                                  <td>{pelicula.titulo}</td>
                                  <td>$ {pelicula.precio}</td>
                              </tr>
                          ))}
                        </tbody>
                    </table>
                    <button  className="btn button-custom-vaciar btn-block" onClick={() => vaciarPeliculas() }>Empty Cart</button>
                    <a href="/" className="btn button-custom btn-block">Place Orders</a>
                </div>
            </div>
        </React.Fragment>

    )

}

export default Carrito;