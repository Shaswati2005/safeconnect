'use client';

import { useState, ChangeEvent, useEffect } from 'react';
import { auth, googleProvider, db } from '../config/firebase'; // Ensure the path is correct
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore'; // Firestore imports
import { useRouter } from 'next/navigation';

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState<boolean>(true); // Toggle between Sign Up and Sign In
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [parentName, setParentName] = useState<string>(''); // Parent's name
  const [childName, setChildName] = useState<string>(''); // Child's name
  const [phoneNumber, setPhoneNumber] = useState<string>(''); // Parent's phone number
  const [childDob, setChildDob] = useState<string>(''); // Child's date of birth
  const [userData, setUserData] = useState<any>(null); // To store user data fetched from Firestore

  // Handling input changes
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const handleParentNameChange = (e: ChangeEvent<HTMLInputElement>) => setParentName(e.target.value);
  const handleChildNameChange = (e: ChangeEvent<HTMLInputElement>) => setChildName(e.target.value);
  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value);
  const handleChildDobChange = (e: ChangeEvent<HTMLInputElement>) => setChildDob(e.target.value);
  const router = useRouter();
  // Sign up function with Firebase
  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      

      // After creating user, store extra information in Firestore
      const userDocRef = doc(db, 'users', user.uid); // Create a document with the user's UID
      await setDoc(userDocRef, {
        parentName,
        childName,
        phoneNumber,
        childDob,
        email: user.email,
      });

      console.log('User signed up and additional info stored in Firestore');
      fetchUserData(user.uid);
      router.push('/trial') // Fetch user data after sign-up

    } catch (err: any) {
      console.error('Error during sign-up: ', err.message);
    }
  };

  // Sign in function with Firebase
  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch user data after sign-in
      fetchUserData(user.uid);

      console.log('User signed in with email and password');
      router.push('/trial')
    } catch (err: any) {
      console.error('Error during sign-in: ', err.message);
    }
  };

  // Fetch user data from Firestore
  const fetchUserData = async (userId: string) => {
    try {
      const userDocRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        setUserData(userDoc.data());
        console.log('User data fetched:', userDoc.data());
      } else {
        console.log('No such document!');
      }
    } catch (err) {
      console.error('Error fetching user data: ', err);
    }
  };

  // Sign up or sign in with Google
  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;

      // After Google sign-in, store extra information if it's a sign-up
      if (isSignUp) {
        const userDocRef = doc(db, 'users', user.uid); // Create a document with the user's UID
        await setDoc(userDocRef, {
          parentName,
          childName,
          phoneNumber,
          childDob,
          email: user.email,
        });

        console.log('Google user signed up and additional info stored in Firestore');
        router.push('/trial')

      }

      fetchUserData(user.uid); // Fetch user data after sign-up/sign-in

      console.log('User signed in with Google');
      router.push('/trial')
      
    } catch (err: any) {
      console.error('Error during Google sign-in: ', err.message);
    }
  };

  return (
    <div className='w-screen  h-screen flex flex-col items-center gap-5 lg:gap-15 justify-center bg-skin-10 '>
      <div className='w-fit h-fit px-3 lg:px-7 py-3 lg:py-7 border-2 rounded-3xl border-violet-10 shadow-2xl shadow-violet-10 flex flex-col items-center justify-between  lg:gap-2'>
      <h1 className='text-xl text-wrap text-violet-10 font-extrabold'>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>

      {isSignUp && (
        <>
          <div className='flex flex-col items-start justify-start' >
            <h3 className='text-sm ml-3 font-thin text-violet-10'>parent's name</h3>

            <input
              type="text"
              placeholder="Parent's Name"
              value={parentName}
              onChange={handleParentNameChange}
              className=' border-2 border-violet-10 w-[350px] lg:w-[500px] h-[30px] px-5 lg:h-[50x] bg-violet-10 rounded-3xl'
              
              
            />
          </div>
          <div className='flex flex-col items-start justify-start'>

          <h3 className='text-sm ml-3 font-thin text-violet-10'>child's name</h3>
            <input
              type="text"
              placeholder="Child's Name"
              value={childName}
              onChange={handleChildNameChange}
              className=' border-2 border-violet-10 w-[350px] lg:w-[500px] h-[30px] px-5 lg:h-[50x] bg-violet-10 rounded-3xl'
              
            />
          </div>
          <div className='flex flex-col items-start justify-start'>

          <h3 className='text-sm ml-3 font-thin text-violet-10'>contact info of parent's</h3>
            <input
              type="text"
              placeholder="Parent's Phone Number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
               className=' border-2 border-violet-10 w-[350px] lg:w-[500px] h-[30px] px-5 lg:h-[50x] bg-violet-10 rounded-3xl'
              
            />
          </div>
          <div className='flex flex-col items-start justify-start'>

          <h3 className='text-sm ml-3 font-thin text-violet-10'>DOB of child</h3>
            <input
              type="date"
              placeholder="Child's Date of Birth"
              value={childDob}
              onChange={handleChildDobChange}
               className=' border-2 border-violet-10 w-[350px] lg:w-[500px] h-[30px] px-5 lg:h-[50x] bg-violet-10 rounded-3xl'
              
            />
          </div>
        </>
      )}

      <div className='flex flex-col items-start justify-start'>

      <h3 className='text-sm ml-3 font-thin text-violet-10'>parent's mail</h3>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
           className=' border-2 border-violet-10 w-[350px] lg:w-[500px] h-[30px] px-5 lg:h-[50x] bg-violet-10 rounded-3xl'
          
        />
      </div>
      <div className='flex flex-col items-start justify-start'>

      <h3 className='text-sm ml-3 font-thin text-violet-10'>password</h3>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
           className=' border-2 border-violet-10 w-[350px] lg:w-[500px] h-[30px] px-5 lg:h-[50x] bg-violet-10 rounded-3xl'
        />
      </div>

      <button
      className='w-fit h-fit px-4 py-2 border rounded-xl bg-violet-10 font-semibold text-skin-10'
        onClick={isSignUp ? handleSignUp : handleSignIn}
        
      >
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </button>

      <div >
        <button className='w-fit h-fit px-4 py-2 border rounded-xl bg-red-500 font-semibold text-skin-10' onClick={signInWithGoogle} >
          Sign {isSignUp ? 'Up' : 'In'} with Google
        </button>
      </div>

      <div >
        <p onClick={() => setIsSignUp(!isSignUp)}  className='text-blue-500 hover:cursor-pointer'>
          {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
        </p>
      </div>

      {/* Display fetched user data */}
      {userData && (
        <div >
          <h3>User Info</h3>
          <p>Parent's Name: {userData.parentName}</p>
          <p>Child's Name: {userData.childName}</p>
          <p>Phone Number: {userData.phoneNumber}</p>
          <p>Child's Date of Birth: {userData.childDob}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}
      </div>
    </div>
  );
}

// Styles for the component
// const styles: React.CSSProperties = {
//   container: {
//     padding: '20px',
//     textAlign: 'center',
//     backgroundColor: '#f9f9f9',
//     borderRadius: '10px',
//     boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//     maxWidth: '400px',
//     margin: '0 auto',
//   },
//   input: {
//     marginBottom: '10px',
//     padding: '10px',
//     width: '80%',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//   },
//   button: {
//     padding: '10px 20px',
//     marginTop: '10px',
//     cursor: 'pointer',
//     backgroundColor: '#007BFF',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//   },
//   googleButtonContainer: {
//     marginTop: '20px',
//   },
//   googleButton: {
//     padding: '10px 20px',
//     cursor: 'pointer',
//     backgroundColor: '#DB4437',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//   },
//   toggleContainer: {
//     marginTop: '20px',
//   },
//   toggleText: {
//     cursor: 'pointer',
//     color: '#007BFF',
//   },
//   userDataContainer: {
//     marginTop: '20px',
//     textAlign: 'left' as const, // Updated type assertion
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     padding: '10px',
//   },
// };
