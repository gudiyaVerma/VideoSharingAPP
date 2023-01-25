
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCkCkIszIQvJxw2moDTy5g-JSl0R-u9l9k",
  authDomain: "video-febe9.firebaseapp.com",
  projectId: "video-febe9",
  storageBucket: "video-febe9.appspot.com",
  messagingSenderId: "111923586331",
  appId: "1:111923586331:web:3eb6dcabf1a433bfc49fbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const provider= new GoogleAuthProvider();
export default app;