// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import {initializeAuth,getReactNativePersistence} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6jx28XeyeiFtK8iNUJ3ahYRb--jPgWAM", 
  authDomain: "myapp-bhal.firebaseapp.com",
  projectId: "myapp-bhal",
  storageBucket: "myapp-bhal.firebasestorage.app",
  messagingSenderId: "970308301182",
  appId: "1:970308301182:web:e2578bf1a84ee49e02432f",
  measurementId: "G-0S160Q4VHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app,{
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const analystics = getAnalystics(app);
export const database = getDatabase(app);
export const db=getFirestore(app);
