import { Button, Form, Image, Modal } from "react-bootstrap";
import AppBackground from "../components/AppBackground";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RegistroAlimentos = ()=>{

    
    const navigate = useNavigate();
    const [foodName, setFoodName] = useState("");
    const [foodDescription, setFoodDescription] = useState("")
    let isRegister = false
    return(
        <>
            <AppBackground show={true}/>
            <Button className="btn-volver" onClick={() => navigate("/home")}>
                {"<"} Volver
            </Button>
        
            <div className="subContainerRegistroAlimentos">
                <h4 className="text-bold">Registrar alimentos</h4>
                <p className="text-bold">Ingredientes</p>
                <p>Agrega la lista de alimentos que tomaste</p>
                
    
                <Form onSubmit={(e)=>{
                    e.preventDefault()
                    navigate("/resultado-registro", {state: { 
                        food: {
                            foodName: foodName, 
                            foodDescription: foodDescription
                        }
                    }})
                }}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="text-bold">Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Alimento" value={foodName} onChange={(e)=>setFoodName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label className="text-bold">Descripción detallada (opcional)</Form.Label>
                        <Form.Control type="text" placeholder="Descripción..." value={foodDescription} onChange={(e)=>setFoodDescription(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="btn-regular">
                        Terminar inscripcion
                    </Button>
                </Form>
            </div>
        
        </>
    );
}

export default RegistroAlimentos;