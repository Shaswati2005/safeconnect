'use client'

import { useState, ChangeEvent } from "react";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, AuthError } from "firebase/auth";

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>)=> {
    setPassword(e.target.value);
  };

  // Safely access current user's email if logged in
  if (auth.currentUser) {
    console.log(auth.currentUser.email);
  } else {
    console.log("No user is logged in");
  }

  const signIn = async (): Promise<void> => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed in with email and password");
    } catch (err:any) {
      
        console.error("Error signing in with email/password: ", err.message);
      }
    };
  

  const signInWithGoogle = async (): Promise<void> => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("User signed in with Google");
    } catch (err:any) {
      
        console.error("Error signing in with Google: ", err.message);
      
    }
  };

  

  return (
    <div>
      <input
        placeholder="Email..."
        value={email}
        onChange={handleEmailChange}
        />
      <input
        placeholder="Password..."
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={signIn}>Sign In with Email</button>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
};
  

