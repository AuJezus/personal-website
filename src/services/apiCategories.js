import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useQuery } from "@tanstack/react-query";

export function useCategories() {
  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const snapshot = await getDocs(collection(db, "categories"));
      const categories = snapshot.docs.map((category) => ({
        id: category.id,
        ...category.data(),
      }));
      return categories;
    },
  });

  return {
    isPending: categoriesQuery.isPending,
    error: categoriesQuery.error,
    categories: categoriesQuery.data,
  };
}
