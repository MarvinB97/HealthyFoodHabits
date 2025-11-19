import { Button, Image } from "react-bootstrap";
import AppBackground from "../components/AppBackground";

const Registro = ()=>{
    return(
        <>
            <AppBackground/>
            <div className="subContainer">
                <p className="text-bold">¿Ya has usado la aplicación antes?</p>
                <p>Continua con tu progreso, ingresando con tu cuenta de Google</p>
                <Button className="btn-regular">
                    Ingresar con Google <i class="fa-brands fa-google"></i>
                </Button>
                <hr/>
                <p className="text-bold">¿Ya has usado la aplicación antes?</p>
                <p>Continua con tu progreso, ingresando con tu cuenta de Google</p>
                <Button className="btn-regular">
                    Continuar
                </Button>
            </div>
        </>
    );
}

export default Registro;