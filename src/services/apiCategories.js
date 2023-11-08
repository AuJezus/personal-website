import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import snapToArr from "../utils/snapToArr";

export async function getAllCategories() {
  const snapshot = await getDocs(collection(db, "categories"));
  const arr = snapToArr(snapshot);
  return arr;
}

export async function getCategoryWIthRef(ref) {
  const snapshot = await getDoc(ref);
  console.log(snapshot.data());
  if (snapshot.exists()) {
    return snapshot.data();
  } else {
    console.error("Category does not exist");
    throw Error("Category does not exist");
  }
}
