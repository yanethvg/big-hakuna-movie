const initialState = {
    movies:[]
}

export default function(state=initialState,action){
    switch (action.type) {
        case 'AGREGAR_PELICULA':
            return{
                ...state,
                movies: [...state.movies,action.payload]
            }
        case 'VACIAR_PELICULA':
            return{
                ...state,
                movies: []
            }
        default:
            return state;
    }
}