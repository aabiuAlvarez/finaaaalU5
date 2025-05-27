import { useReducer } from "react";
import Contexto from './Contexto.jsx';
import MiReducer from './MiReducer.jsx';
import types from './types.js';

const inicio = () => {
    const sesion = localStorage.getItem("sesion");
    const usuario = sesion ? JSON.parse(sesion) : null;
    return {
        logueado: !!usuario,
        usuario: usuario
    }
}

const Provider = ({children}) => {
    const [logeado, dispatch] = useReducer(MiReducer, {}, inicio);

    const login = (datos) => {
        const action = {
            type: types.login,
            usuario: datos
        }
        localStorage.setItem("sesion", JSON.stringify(datos));
        dispatch(action);
    }

    const cerrar_sesion = () => {
        const action = {
            type: types.logout, 
            usuario: null
        }
        localStorage.removeItem("sesion");
        dispatch(action);
    }

    return (
        <Contexto.Provider value={{...logeado, login, cerrar_sesion}}>
            {children}
        </Contexto.Provider>
    )
}

export default Provider;