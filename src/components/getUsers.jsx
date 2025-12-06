import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export const getUsers = async (codigo) => {
  const colRef = collection(db, "grupos", codigo, "miembros");
  const snap = await getDocs(colRef);

  const usersData = await Promise.all(
    snap.docs.map(async (userDoc) => {
      const docRef = doc(db, "users", userDoc.id);

      const userData = (await getDoc(docRef)).data();
      console.log(userData);

      return {
        id: userDoc.id,
        points: userData.points || 0,

        ...userDoc.data(),
      };
    })
  );

  console.log(usersData);

  return usersData;
};
