// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV2Aq0xMUTIPMg8nuXBfWUefDh0H8efjE",
  authDomain: "movie-ticket-64f12.firebaseapp.com",
  projectId: "movie-ticket-64f12",
  storageBucket: "movie-ticket-64f12.appspot.com",
  messagingSenderId: "769064188790",
  appId: "1:769064188790:web:9a682a5fb427bc7fdf9857",
  measurementId: "G-C5R3W2JK31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
