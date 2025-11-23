import { Button, Image } from "react-bootstrap";
import AppBackground from "../components/AppBackground";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import defaultPhoto from "../assets/icons/logo-profile.png";

import { getUser } from "../components/getUser";
import { auth } from "../firebase";

const Home = ()=>{
    const navigate = useNavigate();

    //LEER DATOS DEL USUARIO
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const user = auth.currentUser; // usuario autenticado

        if (!user) return;

        const loadUser = async () => {
        const data = await getUser(user.uid);
        setUserData(data);
        };

        loadUser();
    }, []);
    
    return(
        <>
            <AppBackground show={true}/>
            <Button className="btn-profile" onClick={() => navigate("/perfil")}>
                <Image className="image-profile" src={userData?.photo || defaultPhoto}/>
                <p>Perfil</p>
            </Button>

            
            <div className="subContainerTransparent">
                <p className="text-bold">Dinos qué comiste</p>
                <Button className="btn-white" onClick={() => navigate("/registro-alimentos")}>
                    <i className="fas fa-file-signature"></i>
                    <p>Registrar</p> 
                </Button>
                
                <hr/>
                
                <Button className="btn-white" onClick={() => navigate("/grupo-familiar")}>
                    <i className="fas fa-users"></i> Grupo familiar
                </Button>
                <Button className="btn-white" onClick={() => navigate("/estadisticas")}>
                    <i className="fas fa-chart-line"></i> Estadísticas
                </Button>
            </div>
        </>
    );
}

export default Home;