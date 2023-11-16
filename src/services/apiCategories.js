import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import snapToArr from "../utils/snapToArr";

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
