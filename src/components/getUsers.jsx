import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getUsers = async (codigo) => {
  const colRef = collection(db, "grupos", codigo, "miembros");
  const snap = await getDocs(colRef);

  return snap.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
};