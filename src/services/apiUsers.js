import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function getUser(id) {
  const snapshot = await getDoc(doc(db, "users", id));

  if (snapshot.exists()) {
    return { id: snapshot.id, ...snapshot.data() };
  } else {
    return false;
  }
}

export async function updateUser(id, user) {
  const userRef = await updateDoc(doc(db, "users", id), user);
  return { id, ...user };
}
