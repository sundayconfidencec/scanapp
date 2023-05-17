import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpkB26Hy4RlCAIxS42d_9EWpyEu19etW4",
    authDomain: "reactnativeuserauth-ba836.firebaseapp.com",
    projectId: "reactnativeuserauth-ba836",
    storageBucket: "reactnativeuserauth-ba836.appspot.com",
    messagingSenderId: "394771251067",
    appId: "1:394771251067:web:84f88f606e28d43aa847de"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;




