import { Button, Image } from "react-bootstrap";
import AppBackground from "../components/AppBackground";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const dataEncuesta = [
    {
        id: 1,
        title: "¿Que te motiva a mejorar tu alimentación?",
        description: "¿Cuál opción se ajusta más a tí?",
        options: [
            "Quiero sentirme con mas energia",
            "Quiero tener control de lo que como",
            "Quiero cuidar mi salud",
            "Quiero alcanzar un objetivo fisico"
        ]        
    },
    {
        id: 2,
        title: "¿Cuántas veces comes al día?",
        description: "Esto nos ayudará a recordarte cuándo registrar tus comidas.",
        options: [
            "2 comidas",
            "3 comidas",
            "4 comidas",
            "5 o más comidas"
        ]        
    },
    {
        id: 3,
        title: "¿Como describirias tu tipo de alimentación?",
        description: "Esto nos ayudará a adaptar tus retos y recomendaciones alimenticias.",
        options: [
            "Omnivora",
            "Vegetariana",
            "Vegana",
            "Pescetariana"
        ]        
    },
    {
        id: 4,
        title: "¿Tienes alguna restricción o condición alimentaria que debamos tener en cuenta?",
        description: "Selecciona todas las que apliquen.(No compartiremos esta información con nadie.)",
        options: [
            "Intolerancia a la lactosa",
            "Alergia al gluten",
            "Alergia a frutos secos",
            "Colesterol alto",
            "DIabetes"
        ]        
    }
]

const Encuesta = ()=>{
    const navigate = useNavigate();
    const [encuesta, setEncuesta] = useState(true);
    const [key, setKey] = useState(1);

    const changeKey = ()=>{
        if(key<3){
            setKey(key + 1);
        }
    }

    return(
        <>
            <AppBackground show={true}/>
            {encuesta 
            ? 
            <div className="subContainer">
                <h4 className="text-bold">Queremos conocerte mejor</h4>
                <p>Responde a estas pocas preguntas a continuación. La información que nos brindes será utilizada para adaptar las recomendaciones y el seguimiento a tus hábitos alimenticios actuales.</p>
                <Button className="btn-regular" onClick={()=>setEncuesta(!encuesta)}>
                    Continuar
                </Button>
            </div>
            :
            <div className="subContainer">
                <p className="text-bold">{dataEncuesta[key].title}</p>
                <p>{dataEncuesta[key].description}</p>
                <Button className="btn-encuesta" onClick={changeKey}>
                    {dataEncuesta[key].options[0]}
                </Button>
                <Button className="btn-encuesta" onClick={changeKey}>
                    {dataEncuesta[key].options[1]}
                </Button>
                <Button className="btn-encuesta" onClick={changeKey}>
                    {dataEncuesta[key].options[2]}
                </Button>
                <Button className="btn-encuesta" onClick={changeKey}>
                    {dataEncuesta[key].options[3]}
                </Button>

                {
                    key==3 ?
                    
                    <Button className="btn-regular" onClick={() => navigate("/home")}>
                        Continuar
                    </Button>
                    :
                    <></>
                }
            </div>
            }
        </>
    );
}

export default Encuesta;