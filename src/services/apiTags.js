import { collection, getDocs, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import snapToArr from "../utils/snapToArr";

export async function getAllTags() {
  const snapshot = await getDocs(collection(db, "tags"));
  const arr = snapToArr(snapshot);
  return arr;
}

export async function addTag(tagId, tag) {
  const tagRef = await setDoc(collection(db, "blogs", tagId), tag);
  return tagRef;
}
