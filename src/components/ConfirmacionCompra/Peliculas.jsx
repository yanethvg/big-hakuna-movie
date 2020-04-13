import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { URL_BASE_IMG } from '../../types'

const Peliculas = ({ peliculas }) => {

    //console.log(peliculasSlice);
    return (
        <React.Fragment>
                    {peliculas.map((pelicula,index) => (
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
        </React.Fragment>
    )
}

export default Peliculas;