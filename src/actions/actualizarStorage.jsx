export const agregarPeliculaAction = movie => {
    return {
        type: 'AGREGAR_PELICULA',
        payload: movie
    }
}
export const vaciarPeliculaAction = () => {
    return {
        type: 'VACIAR_PELICULA',
    }
}