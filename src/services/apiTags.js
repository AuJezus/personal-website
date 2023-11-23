import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import snapToArr from "../utils/snapToArr";
import { useQuery } from "@tanstack/react-query";

export async function getAllTags() {
  const snapshot = await getDocs(collection(db, "tags"));
  const arr = snapToArr(snapshot);
  return arr;
}

export async function addTag(tagId, tag) {
  const tagRef = await setDoc(collection(db, "blogs", tagId), tag);
  return tagRef;
}

export async function updateTags(tagArr) {
  const tagsCollection = collection(db, "tags");

  // Fetch all documents in the 'tags' collection
  const tagsSnapshot = await getDocs(tagsCollection);

  // Extract existing tags from the snapshot
  const existingTags = tagsSnapshot.docs.map((doc) => doc.id);

  const addedTags = [];

  // Loop through the tags
  tagArr.forEach(async (tag) => {
    if (!existingTags.includes(tag)) {
      // If the tag doesn't exist, add it to the collection
      const tagDocRef = doc(tagsCollection, tag);
      await setDoc(tagDocRef, {});

      addedTags.push(tag);
    }
  });
}

export function useTags() {
  const tagsQuery = useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      const snapshot = await getDocs(collection(db, "tags"));
      const tags = snapToArr(snapshot);
      return tags;
    },
  });

  return {
    isPending: tagsQuery.isPending,
    error: tagsQuery.error,
    tags: tagsQuery.data,
  };
}
