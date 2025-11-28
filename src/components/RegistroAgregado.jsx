import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

import { getUserRegistros } from "./getUserRegistros";
import { auth } from "../firebase";
import { getAuth } from "firebase/auth";



const RegistroAgregado = ()=>{
    const navigate = useNavigate();
    
    //LEER DATOS DEL USUARIO
    //const [userData, setUserData] = useState(null);
    const [registros, setRegistros] = useState([]);
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    
    useEffect(() => {
        const fetchData = async () => {
        const user = auth.currentUser;
        if (!user) return;

        try {
            const data = await getUserRegistros(user.uid);
            setRegistros(data);
        } catch (error) {
            console.error("Error al leer registros:", error);
        }

        setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) return(
            <div className="subContainer">
                <p>Cargando...</p>
            </div>
    );

    return (
                <div className="subContainer">
                    <h3>Mis Registros</h3>
    
                    {registros.length === 0 && <p>No tienes registros aún.</p>}

                    <div className="container-with-scroll-y">
                        {registros.map((item) => (
                            <div key={item.id} className="registro-card">
                            <h4>{item.nombre}</h4>
                            <p>{item.descripcion}</p>
                            <small>{item.fecha?.toDate().toLocaleString()}</small>
                            <hr />
                            </div>
                        ))}
                    </div>
                    <Button className="btn-regular" onClick={() => navigate("/home")}>
                        Entendido
                    </Button>
                </div>
    );
}

export default RegistroAgregado;