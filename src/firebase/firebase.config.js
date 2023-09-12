// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8Y87rjPYhAjf_YZy6ovh2-kMrf4jLzEs",
  authDomain: "global-news-cdef8.firebaseapp.com",
  projectId: "global-news-cdef8",
  storageBucket: "global-news-cdef8.appspot.com",
  messagingSenderId: "761426592826",
  appId: "1:761426592826:web:cebd888d7b9c428726e103"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;