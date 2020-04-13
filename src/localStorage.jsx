export const obtenerStorage = () => {
    const moviesStorage = localStorage.getItem('movies');
    //console.log(moviesStorage);
    if(moviesStorage === null){
        return undefined
    }
    return JSON.parse(moviesStorage);

}
export const guardarStateStorage = state => {
    //console.log(state);
    const moviesState = JSON.stringify(state);
    localStorage.setItem('movies',moviesState);
}