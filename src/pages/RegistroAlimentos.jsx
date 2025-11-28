import { Button, Form } from "react-bootstrap";
import AppBackground from "../components/AppBackground";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Firebase
import { getAuth } from "firebase/auth";
import { db } from "../firebase"; // importa tu instancia de Firestore
import { collection, addDoc } from "firebase/firestore";
import RegistroAgregado from "../components/RegistroAgregado";

const RegistroAlimentos = () => {
    const navigate = useNavigate();
    const auth = getAuth();

    // Estados del formulario
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [isRegister, setIsRegister] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = auth.currentUser;
        if (!user) {
            alert("No hay usuario logueado");
            return;
        }

        try {
            await addDoc(
                collection(db, "users", user.uid, "registros"),
                {
                    nombre,
                    descripcion,
                    fecha: new Date()
                }
            );

            setIsRegister(true); // activa pantalla de “Registro agregado”
        } catch (err) {
            console.error("Error guardando registro:", err);
        }
    };

    return (
        <>
            <AppBackground show={true}/>
            <Button className="btn-volver" onClick={() => navigate("/home")}>
                {"<"} Volver
            </Button>

            {isRegister ? (
                <RegistroAgregado/>
            ) : (
                <div className="subContainerRegistroAlimentos">
                    <h4 className="text-bold">Registrar alimentos</h4>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-bold">Nombre</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Alimento" 
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="text-bold">Descripción detallada (opcional)</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Descripción..." 
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                            />
                        </Form.Group>

                        <Button type="submit" className="btn-regular">
                            Terminar inscripción
                        </Button>
                    </Form>
                </div>
            )}
        </>
    );
};

export default RegistroAlimentos;
