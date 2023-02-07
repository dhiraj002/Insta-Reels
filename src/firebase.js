// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHqMMCaOMvpos_qk9D_SC4dP9Ls6J7HMg",
  authDomain: "instareels-df91a.firebaseapp.com",
  projectId: "instareels-df91a",
  storageBucket: "instareels-df91a.appspot.com",
  messagingSenderId: "786135122915",
  appId: "1:786135122915:web:407edcd8b4703d4efad6d6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const googleAuth=new firebase.auth.GoogleAuthProvider();
export default firebase;
export const auth=firebase.auth();