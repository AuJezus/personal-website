import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase";
import snapToArr from "../utils/snapToArr";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

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
    return false;
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

export function useBlogs(filter) {
  const blogsQuery = useQuery({
    queryKey: ["blogs", filter],
    queryFn: async () => {
      try {
        const blogsCollection = collection(db, "blogs");
        let blogsFirestoreQuery = query(blogsCollection);

        if (filter.categories?.length > 0) {
          blogsFirestoreQuery = query(
            blogsCollection,
            where("category.id", "in", filter.categories)
          );
        }

        if (filter.tags?.length > 0) {
          blogsFirestoreQuery = query(
            blogsFirestoreQuery,
            where("tags", "array-contains-any", filter.tags)
          );
        }

        if (filter.userId) {
          blogsFirestoreQuery = query(
            blogsCollection,
            where("userId", "==", filter.userId)
          );
        }

        const blogsSnapshot = await getDocs(blogsFirestoreQuery);
        const blogsData = blogsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        return blogsData;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });

  return blogsQuery;
}

export function useBlogsWithUserInfo(filter) {
  const blogsQuery = useBlogs(filter);
  const usersQuery = useQuery({
    queryKey: ["users", filter],
    queryFn: async () => {
      const userIdArr = blogsQuery.data.map((blog) => blog.userId);

      if (userIdArr.length === 0) return [];

      const usersCollection = collection(db, "users");
      const usersFirestoreQuery = query(
        usersCollection,
        where("id", "in", userIdArr)
      );
      const usersSnapshot = await getDocs(usersFirestoreQuery);

      const usersData = usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return usersData;
    },
    enabled: blogsQuery.isSuccess,
  });

  const blogsWithUserInfo =
    usersQuery.isSuccess && blogsQuery.isSuccess
      ? blogsQuery.data.map((blog) => {
          const user = usersQuery.data.find((user) => user.id === blog.userId);
          return { ...blog, user: { ...user }, userId: undefined };
        })
      : null;

  return {
    isPending: usersQuery.isPending || blogsQuery.isPending,
    error: blogsQuery.error || usersQuery.error,
    blogs: blogsWithUserInfo,
  };
}

export function useBlog(id) {
  const blogQuery = useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      try {
        const snapshot = await getDoc(doc(db, "blogs", id));

        return { id: snapshot.id, ...snapshot.data() };
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });

  return {
    isPending: blogQuery.isPending,
    error: blogQuery.error,
    blog: blogQuery.data,
  };
}
