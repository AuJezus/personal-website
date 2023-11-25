import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import snapToArr from "../utils/snapToArr";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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

export function useUserMutation(id) {
  const { user } = useUser(id);

  const queryClient = useQueryClient();
  const userMutation = useMutation({
    mutationFn: async (newUser) => {
      try {
        await updateDoc(doc(db, "users", id), newUser);
        return { id, ...user, ...newUser };
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    onMutate: (newUser) => {
      queryClient.setQueryData(["user", id], { ...user, ...newUser });
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["user", id], data);
    },
  });

  return userMutation;
}
