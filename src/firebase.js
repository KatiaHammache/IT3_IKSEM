 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
 
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyAnN2dPGc3UfEnrD5njtteUcVJsNYRWejk",
    authDomain: "it3-project.firebaseapp.com",
    projectId: "it3-project",
    storageBucket: "it3-project.appspot.com",
    messagingSenderId: "959151680368",
    appId: "1:959151680368:web:c86ec79a42ca94cbe4fdb5"
  };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 // Export firestore database
 // It will be imported into your react app whenever it is needed
 export const db = getFirestore(app);