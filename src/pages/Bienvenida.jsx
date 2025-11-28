import { Button, Image } from "react-bootstrap";
import AppBackground from "../components/AppBackground";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

import hatcheft from "../assets/icons/hat-chef.png";

const Bienvenida = ()=>{
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        });

        return () => unsub();
    }, []);
    
    return(
        <>
            <AppBackground show={false}/>
            <div className="subContainerBienvenida">
                <p>Bienvenido a</p>
                <Image className="image-icon" src={hatcheft}/>
                <h2 className="AppTitle">Healthy Food Habits</h2>
                <p>Pequeños pasos hacia una alimentación mas consciente.</p>
                <hr/>
                <p>Registra tus comidas, descubre tu progreso y celebra cada elección saludable que hagas.</p>

                {user ?
                <Button className="btn-regular" onClick={() => navigate("/home")}>
                    Comienza ahora
                </Button>
                :
                <Button className="btn-regular" onClick={() => navigate("/registro")}>
                    Comienza ahora
                </Button>
                }
                
            </div>
        </>
    );
}

export default Bienvenida;