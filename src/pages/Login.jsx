import "../assets/styles/Login.css";
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import Contexto from "../context/Contexto";
import { useForm } from "react-hook-form";

const Login = () => {
    const { usuario, login } = useContext(Contexto);
    const navegacion = useNavigate();
    
    const finalizar_sesion = () => {
        navegacion("/login", { replace: true });
    }

    const validaciones = {
        usuario: {
            required: "El campo usuario es necesario",
            pattern: {
                value: /[a-zA-Z0-9]+/,
                message: "El usuario solo puede contener letras y numeros"
            }
        },
        password: {
            required: "El campo password es requerido",
            pattern: {
                value: /[a-zA-Z0-9]+/,
                message: "La contraseña solo puede contener letras y numeros"
            }
        }
    };

    const { register, handleSubmit, formState: {errors} } = useForm();

    const data_user = typeof usuario !== "object" ? JSON.parse(usuario) : usuario;
    
    const onSubmit = (data) => {
        fetch("", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({ "usuario": data.usuario, "password": data.password })
        })
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            console.log(respuesta);
            if (respuesta.token === "Correcto") {
                alert("Inicio de sesión válido");
                login(respuesta.token);
                navegacion("/", { replace: true });
            } else {
                alert("Credenciales no válidas");
            }
        })
        .catch(error => {
            console.log("Se ha generado un error en el servidor", error);
        });
    }

    return (
        <div className="login-container">
            {/* Aquí iría tu JSX del formulario */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Campos del formulario */}
            </form>
        </div>
    );
}

export default Login;