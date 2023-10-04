// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB4QOIMtkPcwN79wKpnF-r8d7nC42IDAY",
  authDomain: "dragon-news-web-11b21.firebaseapp.com",
  projectId: "dragon-news-web-11b21",
  storageBucket: "dragon-news-web-11b21.appspot.com",
  messagingSenderId: "481189830655",
  appId: "1:481189830655:web:c4a007413a6495212c11ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;