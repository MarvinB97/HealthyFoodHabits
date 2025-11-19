import { Button, Image } from "react-bootstrap";
import AppBackground from "../components/AppBackground";

const Bienvenida = ()=>{
    return(
        <>
            <AppBackground/>
            <div className="subContainer">
                <p>Bienvenido a</p>
                <Image className="image-icon" src=".\src\assets\icons\hat_chef.png"/>
                <h2 className="AppTitle">Healthy Food Habits</h2>
                <p>Pequeños pasos hacia una alimentación mas consciente.</p>
                <hr/>
                <p>Registra tus comidas, descubre tu progreso y celebra cada elección saludable que hagas.</p>
                <Button className="btn-regular">
                    Comienza ahora
                </Button>
            </div>
        </>
    );
}

export default Bienvenida;