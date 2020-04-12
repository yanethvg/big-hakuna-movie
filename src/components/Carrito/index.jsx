import React, { useState, useEffect } from 'react';
import img from '../image/cart.png'
import img2 from '../image/curso1.jpg';
import './Carrito.css'

const Carrito = () => {

    //cargar las peliculas del localstorage como state inicial
    let peliculasIniciales = JSON.parse(localStorage.getItem('peliculas'));

    if (!peliculasIniciales) {
        peliculasIniciales = [];
    }
    const [peliculas, savePeliculas] = useState(peliculasIniciales);

    //esto es como component didmount o didupdate
    useEffect(
        () => {
            let peliculasIniciales = JSON.parse(localStorage.getItem('peliculas'));

            if (peliculasIniciales) {
                localStorage.setItem('peliculas', JSON.stringify(peliculas));
            } else {
                localStorage.setItem('peliculas', JSON.stringify([]));
            }
        }, [peliculas]
    )
    console.log(peliculas);
    return (
        <React.Fragment>
            <div className="carrito-compras">
                <img src={img} className="img-carrito" alt="" />
                <div className="oculto contenido">
                    <table id="lista-carrito" >
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={img2} alt="" width="90" />
                                </td>
                                <td>CSS Grid y Flexbox Construye + 10 Proyectos</td>
                                <td>$15</td>
                            </tr>
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