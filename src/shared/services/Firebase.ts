
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdbB_cbXcB2gfZoRV28QCv31faMhyZc3w",
  authDomain: "auth-9318b.firebaseapp.com",
  projectId: "auth-9318b",
  storageBucket: "auth-9318b.appspot.com",
  messagingSenderId: "178574259833",
  appId: "1:178574259833:web:1748b30962591fa58046a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



