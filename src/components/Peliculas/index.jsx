import React from 'react';
import Pelicula from './Pelicula';
import { v4 as uuidv4 } from 'uuid';

const Peliculas = ({ peliculas }) => {
    const totalPeliculas = peliculas.length;
    let comienzo = 0;
    let final =4;
    const cantidadColumnas= 4;
    const cantidadFila =  Math.ceil(totalPeliculas/cantidadColumnas);
    //console.log(cantidadFila);
    let  peliculasSlice= []
    for(let i=0; i< cantidadFila; i++)
    {
        peliculasSlice[i]=  peliculas.slice(comienzo,final)
        comienzo = comienzo +4;
        final = final + 4;
    }
    //console.log(peliculasSlice);
    return (
        <React.Fragment>
            {peliculasSlice.map(peliculas => (
                <div className="card-deck mt-5" key={uuidv4()}>
                    {peliculas.map(pelicula => (
                        <Pelicula
                            key={pelicula.id}
                            pelicula={pelicula}
                        ></Pelicula>
                    ))}
            </div>
            ))}
        </React.Fragment>
    )
}

export default Peliculas;