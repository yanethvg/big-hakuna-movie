import React, { useState, useEffect } from 'react';
import img from '../image/cart.png'
import img2 from '../image/curso1.jpg';
import { URL_BASE_IMG } from '../../types';
import './Carrito.css'

const Carrito = () => {

    // //cargar las peliculas del localstorage como state inicial
    // let peliculasIniciales = JSON.parse(localStorage.getItem('peliculas'));

    // if (!peliculasIniciales) {
    //     peliculasIniciales = [];
    // }
    const [peliculas, savePeliculas] = useState([]);

    //esto es como component didmount o didupdate


    useEffect(
        () => {
            let peliculasIniciales = JSON.parse(localStorage.getItem('peliculas'));

            if (peliculasIniciales) {
                localStorage.setItem('peliculas', JSON.stringify(peliculas));
                savePeliculas(peliculasIniciales);
            }
        }, []
    )
    console.log('estoy en carrito',peliculas);
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
                            {peliculas && peliculas.map((pelicula, index) => (
                                <tr key={index}>
                                    <td>{pelicula.id}</td>
                                    <td>{pelicula.titulo}</td>
                                    <td>{pelicula.precio}</td>
                                </tr>
                            )
                            )}
                        </tbody>
                    </table>
                    <a href="/" className="btn button-custom-vaciar btn-block">Empty Cart</a>
                    <a href="/" className="btn button-custom btn-block">Place Orders</a>
                </div>
            </div>
        </React.Fragment>

    )

}

export default Carrito;