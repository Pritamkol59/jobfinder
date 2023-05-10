// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD90USr-hRjS_EnCzwiMJ4U83DDhirltS0",
  authDomain: "jobfinder-a3f2d.firebaseapp.com",
  databaseURL: "https://jobfinder-a3f2d-default-rtdb.firebaseio.com",
  projectId: "jobfinder-a3f2d",
  storageBucket: "jobfinder-a3f2d.appspot.com",
  messagingSenderId: "81748632434",
  appId: "1:81748632434:web:e789abaa73123b386173eb",
  measurementId: "G-97WLLF1FRP"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);