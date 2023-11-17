import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase";

export const auth = getAuth(app);

const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

export async function authenticateGithub() {
  try {
    const result = await signInWithPopup(auth, githubProvider);
    console.log(result);
  } catch (err) {
    // Handle Errors here.
    const errorCode = err.code;
    const errorMessage = err.message;
    // The email of the user's account used.
    const email = err.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(err);
    console.log(err);
  }
}

export async function authenticateGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log(result);
  } catch (err) {
    // Handle Errors here.
    const errorCode = err.code;
    const errorMessage = err.message;
    // The email of the user's account used.
    const email = err.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(err);
    console.log(err);
  }
}

export async function logOut() {
  await signOut(auth);
}
