// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLE24PjflVlOVpGlJbHoebtXTP1ZQ1glo",
  authDomain: "me-ssi.firebaseapp.com",
  projectId: "me-ssi",
  storageBucket: "me-ssi.appspot.com",
  messagingSenderId: "951208197290",
  appId: "1:951208197290:web:fe35979ec232d59dd3a4d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const bd = getFirestore (app)