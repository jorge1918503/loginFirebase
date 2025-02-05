// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMXk5GKg6ZU3U1zNR4O3JUSugp63xQeek",
  authDomain: "login-firebase-13295.firebaseapp.com",
  projectId: "login-firebase-13295",
  storageBucket: "login-firebase-13295.firebasestorage.app",
  messagingSenderId: "682842140824",
  appId: "1:682842140824:web:07332f4b7af09e6caba0ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


export const db = getFirestore(app);