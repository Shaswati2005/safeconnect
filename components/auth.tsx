'use client';

import { useState, ChangeEvent } from 'react';
import { auth, googleProvider } from '../config/firebase'; // Adjust import path as per your project structure
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export default function Auth() {
  // States for user input
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSignUp, setIsSignUp] = useState<boolean>(true); // To toggle between sign-up and sign-in
  const [error, setError] = useState<string | null>(null); // Error state

  // Handling input changes
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  // Sign up function with Firebase
  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up successfully');
      setError(null); // Clear error if successful
    } catch (err: any) {
      console.error('Error during sign-up: ', err.message);
      setError(err.message); // Display the error
    }
  };

  // Sign in function with Firebase
  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in successfully');
      setError(null); // Clear error if successful
    } catch (err: any) {
      console.error('Error during sign-in: ', err.message);
      setError(err.message); // Display the error
    }
  };

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log('User signed in with Google');
      setError(null); // Clear error if successful
    } catch (err: any) {
      console.error('Error during Google sign-in: ', err.message);
      setError(err.message); // Display the error
    }
  };

  // Toggle between sign-up and sign-in forms
  const toggleAuthMode = () => setIsSignUp((prev) => !prev);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          style={{ marginBottom: '10px', padding: '8px', width: '80%' }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          style={{ marginBottom: '10px', padding: '8px', width: '80%' }}
        />
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>

      {isSignUp ? (
        <button
          onClick={handleSignUp}
          style={{ marginBottom: '10px', padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Sign Up with Email
        </button>
      ) : (
        <button
          onClick={handleSignIn}
          style={{ marginBottom: '10px', padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Sign In with Email
        </button>
      )}

      <div>
        <button
          onClick={signInWithGoogle}
          style={{ marginBottom: '10px', padding: '10px 20px', backgroundColor: '#4285F4', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Sign In with Google
        </button>
      </div>

      <div>
        <button
          onClick={toggleAuthMode}
          style={{ padding: '10px 20px', backgroundColor: 'gray', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          {isSignUp ? 'Switch to Sign In' : 'Switch to Sign Up'}
        </button>
      </div>
    </div>
  );
}
