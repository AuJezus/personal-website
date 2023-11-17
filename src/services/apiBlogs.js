import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import snapToArr from "../utils/snapToArr";

export async function getAllBlogs() {
  const snapshot = await getDocs(collection(db, "blogs"));
  const arr = snapToArr(snapshot);
  return arr;
}

export async function getBlog(id) {
  const snapshot = await getDoc(doc(db, "blogs", id));

  if (snapshot.exists()) {
    return { id: snapshot.id, ...snapshot.data() };
  } else {
    console.error("Blog does not exist");
    throw Error("Blog does not exist");
  }
}

export async function createBlog(blog) {
  const blogRef = await addDoc(collection(db, "blogs"), blog);
  return { id: blogRef.id, ...blog };
}

export async function updateBlog(id, blog) {
  const blogRef = await updateDoc(doc(db, "blogs", id), blog);
  return { id, ...blog };
}
