import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getUserRegistros = async (uid) => {
  const colRef = collection(db, "users", uid, "registros");
  const snap = await getDocs(colRef);

  return snap.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
};
