import Contexto from "../context/Contexto";
import {  useContext } from "react";
import { Navigate } from "react-router-dom";

const RutasPrivadas = ({Children}) =>{
    const {sesion} = useContext(Contexto);
    return(sesion) ?Children :<Navigate to="/loading"></Navigate>
}

export default RutasPrivadas;