import React from 'react';
import img from '../image/cart.png'
import img2 from '../image/curso1.jpg';
import './Carrito.css'
const Carrito = () => {
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
                                    <img src={img2} alt="" width="90"/>
                                </td>
                                <td>CSS Grid y Flexbox Construye + 10 Proyectos</td>
                                <td>$15</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="/" class="btn button-custom-vaciar btn-block">Empty Cart</a>
                    <a href="/" class="btn button-custom btn-block">Place Orders</a>
                </div>
            </div>
        </React.Fragment>

    )

}

export default Carrito;