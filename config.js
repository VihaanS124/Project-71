import firebase from "firebase";
require("@firebase/firestore");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByU80miFmv2bphbPHAoa0d2hifvJ9_WQc",
  authDomain: "project-71-9f8d3.firebaseapp.com",
  projectId: "project-71-9f8d3",
  storageBucket: "project-71-9f8d3.appspot.com",
  messagingSenderId: "370611803458",
  appId: "1:370611803458:web:4b2bf92e4fb09933f764db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
