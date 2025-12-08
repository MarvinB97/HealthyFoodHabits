import { Button, Image } from "react-bootstrap";
import AppBackground from "../components/AppBackground";
import { useNavigate } from "react-router-dom";

import { signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, googleProvider, db } from "../firebase";

const Registro = () => {
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("Usuario autenticado:", user);

      // GUARDA O ACTUALIZA EL USUARIO
      try {
        await setDoc(
          doc(db, "users", user.uid),
          {
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            lastLogin: new Date(),
          },
          { merge: true }
        );

        console.log("Usuario guardado con éxito");
      } catch (err) {
        console.error("Error Firestore:", err.code, err.message);
      }

      console.log("Usuario guardado en Firestore");
      navigate("/encuesta");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AppBackground show={true} />
      <div className="subContainer">
        <p className="text-bold">¿Ya has usado la aplicación antes?</p>
        <p>Continua con tu progreso, ingresando con tu cuenta de Google</p>
        <Button className="btn-regular" onClick={loginWithGoogle}>
          Ingresar con Google <i className="fa-brands fa-google"></i>
        </Button>
        <hr />
        <p className="text-bold">
          ¿Eres nuevo en la aplicación? ¡No hay problema!
        </p>
        <p>Comienza a registrar los alimentos que consumes</p>
        <Button className="btn-regular" onClick={() => navigate("/encuesta")}>
          Continuar
        </Button>
      </div>
    </>
  );
};

export default Registro;
