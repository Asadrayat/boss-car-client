// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARr_8Z_HQ6hc65uzsOk9GG4Q2Z8t1JwY4",
  authDomain: "boss-car-auth.firebaseapp.com",
  projectId: "boss-car-auth",
  storageBucket: "boss-car-auth.appspot.com",
  messagingSenderId: "737174524051",
  appId: "1:737174524051:web:9b36f22c967cada0787d66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;