// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIsGP4vHanU3ut6HiWjLHA5XilVCqbTXY",
  authDomain: "muviii.firebaseapp.com",
  projectId: "muviii",
  storageBucket: "muviii.appspot.com",
  messagingSenderId: "718861170021",
  appId: "1:718861170021:web:8e9b63cf8bd06627901d8c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const AUTH = getAuth(app);