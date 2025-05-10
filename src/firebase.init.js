// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe6b66-cqB7_mwuTDktxd1lnKl457r4fg",
  authDomain: "auth-integration-6d115.firebaseapp.com",
  projectId: "auth-integration-6d115",
  storageBucket: "auth-integration-6d115.firebasestorage.app",
  messagingSenderId: "73489914256",
  appId: "1:73489914256:web:da0665f22975e33b3ffb15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);