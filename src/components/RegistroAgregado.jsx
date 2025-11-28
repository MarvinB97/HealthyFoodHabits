import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

import { getUserRegistros } from "./getUserRegistros";
import { getAuth } from "firebase/auth";

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

const RegistroAgregado = ({isGrafico}) => {
  const navigate = useNavigate();
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

  if (loading)
    return (
      <div className="subContainer">
        <p>Cargando...</p>
      </div>
    );

  // -------- PROCESAR DATOS PARA GRAFICAR --------
  const conteoPorDia = registros.reduce((acc, item) => {
    const fecha = item.fecha?.toDate().toLocaleDateString();
    acc[fecha] = (acc[fecha] || 0) + 1;
    return acc;
  }, {});

  // Transformar en arreglo para Recharts
  const dataGrafico = Object.keys(conteoPorDia).map((fecha) => ({
    fecha,
    cantidad: conteoPorDia[fecha],
  }));

  return (
    <div className="subContainerEstadisticas">
      <h3>Mis Registros</h3>

      {isGrafico?
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={dataGrafico}>
            <XAxis dataKey="fecha" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="cantidad" fill="#4b8df8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      :
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
      }


      <Button className="btn-regular" onClick={() => navigate("/home")}>
        Entendido
      </Button>
    </div>
  );
};

export default RegistroAgregado;