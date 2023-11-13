// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABD8IdAQ82AAauhrDqUspR-rX6mmPMC80",
  authDomain: "renkendo-store.firebaseapp.com",
  projectId: "renkendo-store",
  storageBucket: "renkendo-store.appspot.com",
  messagingSenderId: "343731286717",
  appId: "1:343731286717:web:e2b25df575a75250a6fdd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);