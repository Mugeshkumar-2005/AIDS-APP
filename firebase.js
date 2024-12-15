// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBn0wrUdmU7ZCWQW-BshnLk8yl5lV_yMW8",
  authDomain: "aids-39c9e.firebaseapp.com",
  projectId: "aids-39c9e",
  storageBucket: "aids-39c9e.appspot.com",
  messagingSenderId: "521842141695",
  appId: "1:521842141695:android:9e34b14dbc8e00857e1fca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
