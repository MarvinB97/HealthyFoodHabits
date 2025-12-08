import { Button, Image } from "react-bootstrap";
import AppBackground from "../components/AppBackground";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { getUser } from "../components/getUser";
import { auth, db } from "../firebase";

import defaultPhoto from "../assets/icons/logo-profile.png";
import logro from "../assets/icons/logro.png";

const Perfil = () => {
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    navigate("/");
  };

  //LEER DATOS DEL USUARIO
  const [userData, setUserData] = useState(null);
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const user = auth.currentUser; // usuario autenticado

    if (!user) return;

    const loadUser = async () => {
      const data = await getUser(user.uid);
      setUserData(data);

      const snap = await getDocs(collection(db, "users", user.uid, "badges"));
      console.log(snap.docs);
      setBadges(snap.docs);
    };

    loadUser();
  }, []);

  return (
    <>
      <AppBackground show={true} />
      <Button className="btn-volver" onClick={() => navigate("/home")}>
        {"<"} Volver
      </Button>
      <div className="subContainer">
        <h4 className="text-bold">{userData?.name || "Nombre del Usuario"}</h4>
        <Image className="image-icon" src={userData?.photo || defaultPhoto} />

        <p>Mis insignias</p>
        <hr />

        {badges.length > 0 && <p>No tienes insignias</p>}

        {badges.map((doc) => (
          <div>
            <Image className="image-logro" src={logro} />
            <p>{doc.data().name}</p>
          </div>
        ))}
        {/* <Image className="image-logro" src={logro} /> */}

        {/**se deben colocar las imagenes de cada una */}
        <Button className="btn-regular" onClick={logout}>
          Cerrar Sesión
        </Button>
      </div>
    </>
  );
};

export default Perfil;
