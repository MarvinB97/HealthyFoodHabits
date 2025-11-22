import { Button, Form, Image } from "react-bootstrap";
import AppBackground from "../components/AppBackground";
import { useNavigate } from "react-router-dom";

const RegistroAlimentos = ()=>{
    const navigate = useNavigate();
    let isRegister = false
    return(
        <>
            <AppBackground/>
            <Button className="btn-volver" onClick={() => navigate("/home")}>
                {"<"} Volver
            </Button>
            {isRegister 
            ? 
            <div className="subContainer">
                <p className="text-bold">Registro agregado</p>
                <p>Retroalimentación sobre alimentos registrados
    
    Cantidad de puntos o lista de insignias obtenidos a partir de este registro
    
    Consejo para comer mejos tomando como base el registro hecho</p>
                <Button className="btn-regular">
                    Entendido
                </Button>
            </div>
            :
            <div className="subContainerRegistroAlimentos">
                <h4 className="text-bold">Registrar alimentos</h4>
                <p className="text-bold">Ingredientes</p>
                <p>Agrega la lista de alimentos que tomaste</p>
                
    
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="text-bold">Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Alimento" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label className="text-bold">Descripción detallada (opcional)</Form.Label>
                        <Form.Control type="text" placeholder="Descripción..." />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="btn-regular" onClick={() => navigate("/home")}>
                        Terminar inscripcion
                    </Button>
                </Form>
            </div>
            
            }
        </>
    );
}

export default RegistroAlimentos;