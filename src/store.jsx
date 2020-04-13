import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';
import { obtenerStorage,guardarStateStorage } from './localStorage';

//const initialState = {};
//obtener citas del localStorage
const storageState = obtenerStorage();
const middleware = [thunk];


const store = createStore(
    rootReducers,
    storageState,
    compose(applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
//esto es detectar los cambios acceder  a los cambios
store.subscribe( () => {
    guardarStateStorage({
        movies: store.getState().movies,
    })
})
export default store;