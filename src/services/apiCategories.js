import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import snapToArr from "../utils/snapToArr";
import { useQuery } from "@tanstack/react-query";

export async function getAllCategories() {
  const snapshot = await getDocs(collection(db, "categories"));
  const arr = snapToArr(snapshot);
  return arr;
}

export async function getCategory(id) {
  const snapshot = await getDoc(doc(db, "categories", id));
  if (snapshot.exists()) {
    return snapshot.data();
  } else {
    console.error("Category does not exist");
    throw Error("Category does not exist");
  }
}

export function useCategories() {
  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const snapshot = await getDocs(collection(db, "categories"));
      const categories = snapToArr(snapshot);
      return categories;
    },
  });

  return {
    isPending: categoriesQuery.isPending,
    error: categoriesQuery.error,
    categories: categoriesQuery.data,
  };
}
