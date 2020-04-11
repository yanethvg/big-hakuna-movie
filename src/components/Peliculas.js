import React, { useEffect } from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPeliculasActions } from '../actions/obtenerPeliculasActions';
import Spinner from './Spinner';

const Peliculas = () => {
    // Mandar llamar a la acción principal para retornar los peliculas
    const dispatch = useDispatch();
    useEffect(
        () => {
            //peliculas cuando el componente este listo
            const cargarpeliculas = () => dispatch(obtenerPeliculasActions());
            cargarpeliculas();
        }, [dispatch]
    );
    //Acceder al state
    //const loading = useSelector(state => state.peliculas.loading);
    //const error = useSelector(state => state.peliculas.error);
    //const peliculas = useSelector(state => state.peliculas.peliculas);
    //console.log(peliculas);
    //const componente = (loading) ? <Spinner></Spinner>:null;
    return (
        <div>
            Hola
        </div>
    );
};

export default Peliculas;