import Contexto from "../context/Contexto";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const RutasPublicas = ({Children}) =>{
    const {sesion} = useContext(Contexto);
    return(sesion) ?<Navigate to="/login"/> : Children;

}
export default RutasPublicas