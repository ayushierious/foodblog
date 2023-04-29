// import firebase from "firebase";
import { getAuth } from "firebase/auth";
import {initializeApp} from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyC470UIPHCMsKZNkIERWSJBzo_im2pYU6c",
  authDomain: "login-signup-firebase-6363d.firebaseapp.com",
  projectId: "login-signup-firebase-6363d",
  storageBucket: "login-signup-firebase-6363d.appspot.com",
  messagingSenderId: "486111847418",
  appId: "1:486111847418:web:c6a644e4fc82c8f0993a43",
};
initializeApp(firebaseConfig);
export const auth = getAuth();


// export default fire;
