import { Button, Image } from "react-bootstrap";
import AppBackground from "../components/AppBackground";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import RegistroAgregado from "../components/RegistroAgregado";

const Estadisticas = ()=>{
    const navigate = useNavigate();
    const [time, setTime] = useState(true)

    return(
        <>
            <AppBackground show={true}/>
            <Button className="btn-volver" onClick={() => navigate("/home")}>
                {"<"} Volver
            </Button>
            <div className="subContainerTransparentEstadisticas">
                <h4 className="text-bold">Estadísticas</h4>
                <Button className="btn-left" onClick={()=>setTime(true)}>
                    Gráfico
                </Button>
                <Button className="btn-right" onClick={()=>setTime(false)}>
                    Lista
                </Button>
            </div>
            {time 
            ? 
                <RegistroAgregado isGrafico={time}/>
            
            :
                <RegistroAgregado isGrafico={time}/>
            }
        </>
    );
}

export default Estadisticas;