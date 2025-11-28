import { Button, Form, Image } from "react-bootstrap";
import AppBackground from "../components/AppBackground";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { doc, setDoc } from "firebase/firestore";


import { actualizarInfoUser } from "../components/actualizarInfoUser";

// Firebase
import { getAuth } from "firebase/auth";
import { db } from "../firebase"; // importa tu instancia de Firestore



// Crear grupo con un código (p.ej. ABC123)
async function crearGrupo(db, user, codigo) {
    await setDoc(doc(db, "grupos", codigo), {
        creadoEl: new Date(),
    });
    actualizarInfoUser(codigo);
}



const GrupoFamiliarCreate = ()=>{
    const navigate = useNavigate();

    const auth = getAuth();
    
    // Estados del formulario
    const [codigo, setCodigo] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const user = auth.currentUser;
        if (!user) {
            alert("No hay usuario logueado");
            return;
        }
    
        try {
            await crearGrupo(db, user, codigo);
            navigate("/grupo-familiar");
        } catch (err) {
            console.error("Error guardando registro:", err);
        }
    };

    return(
        <>
            <AppBackground show={true}/>
            <Button className="btn-volver" onClick={() => navigate("/grupo-familiar")}>
                {"<"} Volver
            </Button>
            <div className="subContainerTransparent">
                <p className="text-bold">Crear Grupo Familiar</p>
                <p>A continuación digite un código, el cual puedes compartir con tu familia:</p>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control 
                            type="text" 
                            placeholder="Código" 
                            value={codigo}
                            onChange={(e) => setCodigo(e.target.value)}
                           />
                    </Form.Group>

                    <Button type="submit" className="btn-regular">
                        Crear
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default GrupoFamiliarCreate;