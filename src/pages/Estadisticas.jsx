import { Button, Image } from "react-bootstrap";
import AppBackground from "../components/AppBackground";

const Estadisticas = ()=>{
    let isDiario = true
    return(
        <>
            <AppBackground/>

            <div className="subContainerTransparent">
                <h4 className="text-bold">Estadísticas</h4>
                <Button className="btn-left">
                    Diario
                </Button>
                <Button className="btn-right">
                    Semanal
                </Button>
            {isDiario 
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