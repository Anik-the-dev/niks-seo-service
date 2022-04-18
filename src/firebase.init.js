// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPPchIaiWmMK4mkOXRxuBw2rqg3zwoXyY",
  authDomain: "nikseo22.firebaseapp.com",
  projectId: "nikseo22",
  storageBucket: "nikseo22.appspot.com",
  messagingSenderId: "496672418985",
  appId: "1:496672418985:web:bae7d0af68b4bffa0ccdb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;