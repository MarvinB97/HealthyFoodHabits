import { Button } from "react-bootstrap";
import AppBackground from "../components/AppBackground";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

import { db } from "../firebase";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { getUsers } from "../components/getUsers";

const GrupoFamiliarLista = () => {
    const navigate = useNavigate();

    const auth = getAuth();

    const [grupo, setGrupo] = useState(null);
    const [miembros, setMiembros] = useState([]);
    const [loading, setLoading] = useState(true);

    // Obtener el grupo del usuario
    useEffect(() => {
        const fetchGrupo = async () => {
            const user = auth.currentUser;
            if (!user) return;

            try {
                const ref = doc(db, "users", user.uid);
                const snap = await getDoc(ref);

                if (snap.exists()) {
                    setGrupo(snap.data().grupo); // ahora sí existe
                } else {
                    console.error("No existe documento del usuario");
                }
            } catch (error) {
                console.error("Error cargando grupo:", error);
            }
        };

        fetchGrupo();
    }, []);

    //Cuando ya sabemos el grupo → cargar miembros
    useEffect(() => {
        if (!grupo) return; // evita ejecutar con undefined

        const fetchMiembros = async () => {
            try {
                const data = await getUsers(grupo);
                setMiembros(data);
            } catch (error) {
                console.error("Error al cargar miembros:", error);
            }

            setLoading(false);
        };

        fetchMiembros();
    }, [grupo]);

    if (loading) {
        return (
            <>
                <AppBackground show={true} />
                <Button className="btn-volver" onClick={() => navigate("/grupo-familiar")}>
                    {"<"} Volver
                </Button>
                <div className="subContainer">
                    <p>Cargando información...</p>
                </div>
            </>
        );
    }

    return (
        <>
            <AppBackground show={true} />
            <Button className="btn-volver" onClick={() => navigate("/grupo-familiar")}>
                {"<"} Volver
            </Button>
            <div className="subContainer">
                <h3>Integrantes del grupo familiar</h3>

                {miembros.length === 0 && <p>No hay miembros aún.</p>}

                <div className="container-with-scroll-y">
                    {miembros.map((item) => (
                        <div key={item.id} className="registro-card">
                            <h4>{item.name}</h4>
                            <small>{item.fecha?.toDate().toLocaleString()}</small>
                            <hr />
                        </div>
                    ))}
                </div>

                <Button className="btn-regular" onClick={() => navigate("/grupo-familiar")}>
                    Entendido
                </Button>
            </div>
        </>
    );
};

export default GrupoFamiliarLista;