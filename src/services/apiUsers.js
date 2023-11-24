import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import snapToArr from "../utils/snapToArr";
import { useQuery } from "@tanstack/react-query";

export async function getUser(id) {
  const snapshot = await getDoc(doc(db, "users", id));

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

export function useUser(id) {
  const userQuery = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      try {
        const snapshot = await getDoc(doc(db, "users", id));

        return { id: snapshot.id, ...snapshot.data() };
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });

  return {
    isPending: userQuery.isPending,
    error: userQuery.error,
    user: userQuery.data,
  };
}
