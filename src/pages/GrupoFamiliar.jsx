import { Button, Image } from "react-bootstrap";
import AppBackground from "../components/AppBackground";
import { useNavigate } from "react-router-dom";

const GrupoFamiliar = ()=>{
    const navigate = useNavigate();
    return(
        <>
            <AppBackground show={true}/>
            <Button className="btn-volver" onClick={() => navigate("/home")}>
                {"<"} Volver
            </Button>
            <div className="subContainerTransparent">
                <p className="text-bold">Grupo familiar</p>
                <Button className="btn-white-group">
                    <i class="fas fa-plus"></i>
                    <p>Crear un grupo familiar</p> 
                </Button>
                
                <hr/>
                
                <Button className="btn-white-group">
                    <i class="fas fa-link"></i>
                    <p>Unirse a grupo familiar </p>
                </Button>
            </div>
        </>
    );
}

export default GrupoFamiliar;