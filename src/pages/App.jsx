import "../assets/styles/Main";
import { BrowserRouter, Route, Navigate, Routes, Router } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Inicio from "./Inicio.jsx";
import Error from "./Error.jsx";
import RutasPrivadas from "../routers/RutasPrivadas.jsx";
import RutasPublicas from "../routers/RutasPublicas.jsx";
const App = () => {
    /*const[contenido,setContenido] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/formula1")
        .then((respuesta) => respuesta.json())
        .then((respuesta)=>{
            setContenido(respuesta);
            console.log(respuesta);
        }).catch((error) => {
            console.log("Error al consumir la api")
        })
    }, [])*/
    
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<RutasPrivadas><Inicio/></RutasPrivadas>}/>
                <Route path="/" element={<RutasPrivadas><Inicio/></RutasPrivadas>}/>
                <Route path="/" element={<RutasPrivadas><Autos/></RutasPrivadas>}/>
                <Route path="/" element={<RutasPrivadas><pilotos/></RutasPrivadas>}/>
                <Route path="/" element={<RutasPublicas><Login/></RutasPublicas>}/>
                <Route path="/" element={<RutasPublicas><Registro/></RutasPublicas>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
  

        
        /*{
            contenido.map((personaje)=>{
                return <p>{personaje.nombre}</p>
            })
        }*/
    );
}

export default App;