import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app, { db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const auth = getAuth(app);

const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

export async function authenticateGithub() {
  try {
    const result = await signInWithPopup(auth, githubProvider);

    const user = result.user;
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    const githubURL = JSON.parse(result._tokenResponse.rawUserInfo).html_url;

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        email: user.email,
        displayName: result._tokenResponse.screenName,
        photoURL: user.photoURL,
        contacts: {
          github: githubURL,
          email: {
            address: user.email,
            public: false,
          },
        },
      });
    }
  } catch (err) {
    // Handle Errors here.
    const errorCode = err.code;
    const errorMessage = err.message;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(err);
    console.log(err);
  }
}

export async function authenticateGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    const user = result.user;
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        email: user.email,
        displayName: user.displayName.split(" ").join(""),
        photoURL: user.photoURL,
        contacts: {
          email: {
            address: user.email,
            public: false,
          },
        },
      });
    }
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
