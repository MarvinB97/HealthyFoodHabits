import { Button, Image } from "react-bootstrap";
import AppBackground from "../components/AppBackground";
import { useNavigate } from "react-router-dom";

const Perfil = ()=>{
    const navigate = useNavigate();
    
    return(
        <>
            <AppBackground show={true}/>
            <Button className="btn-volver" onClick={() => navigate("/home")}>
                {"<"} Volver
            </Button>
            <div className="subContainer">
                <h4 className="text-bold">UserName</h4>
                <Image className="image-icon" src=".\src\assets\icons\logo-profile.png"/>
                
                <p>Mis insignias</p>
                <hr/>
                {/**se deben colocar las imagenes de cada una */}
            
            </div>
        </>
    );
}

export default Perfil;