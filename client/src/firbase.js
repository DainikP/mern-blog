
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey:"AIzaSyDGdiYyFoX3IRB_UNa1WEJVA_awRLG27jI",
  authDomain: "mern-blog-6bf41.firebaseapp.com",
  projectId: "mern-blog-6bf41",
  storageBucket: "mern-blog-6bf41.appspot.com",
  messagingSenderId: "349117157717",
  appId: "1:349117157717:web:53a985e9f02ca1909a9fdc",
  measurementId: "G-NET8ZWP9R7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
