import { auth } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase"; // importa tu instancia de Firestore



export const actualizarInfoUser = async (codigo) => {
    try {
        
        const user = auth.currentUser; // usuario autenticado
        console.log("Usuario autenticado:", user);

        // Actualizar
        try {
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                lastLogin: new Date(),
                grupo: codigo
            });

            // 2. Agregar al usuario al grupo como miembro
            await setDoc(doc(db, "grupos", codigo, "miembros", user.uid), {
                uid: user.uid,
                name: user.displayName,
                fecha: new Date()
            });

            console.log("Usuario guardado con éxito");

        } catch (err) {
            console.error("Error Firestore:", err.code, err.message);
        }

        console.log("Usuario actualizado en Firestore");
    } catch (error) { 
        console.error(error);
    }
};