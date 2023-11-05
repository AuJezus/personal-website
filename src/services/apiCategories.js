import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import snapToArr from "../utils/snapToArr";

export async function getAllCategories() {
  const snapshot = await getDocs(collection(db, "categories"));
  const arr = snapToArr(snapshot);
  return arr;
}
