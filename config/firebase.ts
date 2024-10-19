
import { initializeApp, FirebaseApp } from 'firebase/app'; 
import { getAuth, Auth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA0IZaxhOiXunj4V33hjgOLw5VNSl-aIkI",
  authDomain: "safeconnect-c5548.firebaseapp.com",
  projectId: "safeconnect-c5548",
  storageBucket: "safeconnect-c5548.appspot.com",
  messagingSenderId: "633431159657",
  appId: "1:633431159657:web:eaf184e6f3bf9df48503f8",
  measurementId: "G-23YER7HWYT"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app); 
export const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();
export const db: Firestore = getFirestore(app);
