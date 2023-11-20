import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export async function uploadFile(name, file) {
  try {
    // Initialize Firebase Storage
    const storage = getStorage();

    // Create a storage reference with a unique name
    const storageRef = ref(storage, name);

    // Upload file to Firebase Storage
    await uploadBytes(storageRef, file);

    // Get the download URL of the uploaded file
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading file:", error.message);
  }
}
