import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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
    enabled: id ? true : false,
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
