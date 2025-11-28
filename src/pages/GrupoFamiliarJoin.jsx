import { Button, Form } from "react-bootstrap";
import AppBackground from "../components/AppBackground";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { actualizarInfoUser } from "../components/actualizarInfoUser";


// Firebase
import { getAuth } from "firebase/auth";

async function unirseAGrupo(codigo){
    
    try {
        await actualizarInfoUser(codigo);
    } catch (err) {
        console.error("Error guardando registro:", err);
    }
};

const GrupoFamiliarJoin = ()=>{
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
            await unirseAGrupo(codigo);
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
                
                <p>Pídele al administrador de un grupo familiar que te brinde el código de acceso al grupo familiar y digítalo a continuación:</p>
                    
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
                        Continuar
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default GrupoFamiliarJoin;