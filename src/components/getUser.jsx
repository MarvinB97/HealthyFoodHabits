import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const getUser = async (uid) => {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.data();
};
