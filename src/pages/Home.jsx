import { Button, Image } from "react-bootstrap";
import AppBackground from "../components/AppBackground";
import { useNavigate } from "react-router-dom";

const Home = ()=>{
    const navigate = useNavigate();
    return(
        <>
            <AppBackground/>
            <Button className="btn-profile" onClick={() => navigate("/perfil")}>
                <Image className="image-profile" src=".\src\assets\icons\logo-profile.png"/>
                <p>Perfil</p>
            </Button>

            
            <div className="subContainerTransparent">
                <p className="text-bold">Dinos qué comiste</p>
                <Button className="btn-white" onClick={() => navigate("/registro-alimentos")}>
                    <i class="fas fa-file-signature"></i>
                    <p>Registrar</p> 
                </Button>
                
                <hr/>
                
                <Button className="btn-white" onClick={() => navigate("/grupo-familiar")}>
                    <i class="fas fa-users"></i> Grupo familiar
                </Button>
                <Button className="btn-white" onClick={() => navigate("/estadisticas")}>
                    <i class="fas fa-chart-line"></i> Estadísticas
                </Button>
            </div>
        </>
    );
}

export default Home;