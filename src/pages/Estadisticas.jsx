import { Button, Image } from "react-bootstrap";
import AppBackground from "../components/AppBackground";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Estadisticas = ()=>{
    const navigate = useNavigate();
    const [time, setTime] = useState(true)

    return(
        <>
            <AppBackground/>
            <Button className="btn-volver" onClick={() => navigate("/home")}>
                {"<"} Volver
            </Button>
            <div className="subContainerTransparent">
                <h4 className="text-bold">Estadísticas</h4>
                <Button className="btn-left" onClick={()=>setTime(true)}>
                    Diario
                </Button>
                <Button className="btn-right" onClick={()=>setTime(false)}>
                    Semanal
                </Button>
            {time 
            ? 
                <p>Resultados diarios.</p>
            
            :
                <p>Resultados semanales.</p>
            }
            </div>
        </>
    );
}

export default Estadisticas;