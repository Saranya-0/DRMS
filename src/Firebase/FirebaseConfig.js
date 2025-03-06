
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider}  from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAy0z9mfEcvrcs7AVEvdXur2HVMQUI-jHM",
  authDomain: "hrms-47f5e.firebaseapp.com",
  projectId: "hrms-47f5e",
  storageBucket: "hrms-47f5e.firebasestorage.app",
  messagingSenderId: "39413307793",
  appId: "1:39413307793:web:aba5513f3c03e981036230",
//   measurementId: "G-0WBC6DJSRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
 export const googleProvider = new GoogleAuthProvider();
 export const db =getFirestore(app)
export default app;

// export { auth, googleProvider};
