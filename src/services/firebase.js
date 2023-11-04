// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

export default app;
export { analytics };
