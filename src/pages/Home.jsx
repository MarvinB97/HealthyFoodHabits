import { Button, Image } from "react-bootstrap";
import AppBackground from "../components/AppBackground";

const Home = ()=>{
    return(
        <>
            <AppBackground/>
            <div className="subContainerTransparent">
                <p className="text-bold">Dinos qué comiste</p>
                <Button className="btn-white">
                    <i class="fas fa-file-signature"></i>
                    <p>Registrar</p> 
                </Button>
                
                <hr/>
                
                <Button className="btn-white">
                    <i class="fas fa-users"></i> Grupo familiar
                </Button>
                <Button className="btn-white">
                    <i class="fas fa-chart-line"></i> Estadísticas
                </Button>
            </div>
        </>
    );
}

export default Home;