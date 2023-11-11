import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1tCAfjONVlmj1wNa5yAlTeUN9SZYTFB0",
  authDomain: "aujezus-com.firebaseapp.com",
  projectId: "aujezus-com",
  storageBucket: "aujezus-com.appspot.com",
  messagingSenderId: "788284718779",
  appId: "1:788284718779:web:add3b3e0499eae2e63f39e",
  measurementId: "G-7TR8HH924H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default app;
export { analytics, db };
