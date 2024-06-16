import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC-8B7X3pFcn3_LiLiBkU3j8Y164ROVQns",
    authDomain: "app1-79f2c.firebaseapp.com",
    projectId: "app1-79f2c",
    storageBucket: "app1-79f2c.appspot.com",
    messagingSenderId: "326353266030",
    appId: "1:326353266030:web:299e5f2b29ebe985b08d7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth() // for authentication
const provider = new GoogleAuthProvider() //for provider

const db = getFirestore(app)

export {auth , provider, db }
