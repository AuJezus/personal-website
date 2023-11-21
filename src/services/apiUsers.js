import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import snapToArr from "../utils/snapToArr";

export async function getUser(id) {
  const snapshot = await getDoc(doc(db, "users", id));
  console.log(id);

  if (snapshot.exists()) {
    return { id: snapshot.id, ...snapshot.data() };
  } else {
    return false;
  }
}

export async function getAllUsers() {
  const snapshot = await getDocs(collection(db, "users"));
  const arr = snapToArr(snapshot);
  return arr;
}

export async function updateUser(id, user) {
  const userRef = await updateDoc(doc(db, "users", id), user);
  return { id, ...user };
}
