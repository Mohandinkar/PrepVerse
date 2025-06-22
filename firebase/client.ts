// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAm4-GLPMaCeAsRkGqoMwQGWDjFCTgvQt4",
    authDomain: "prepverse-83588.firebaseapp.com",
    projectId: "prepverse-83588",
    storageBucket: "prepverse-83588.firebasestorage.app",
    messagingSenderId: "1075437664299",
    appId: "1:1075437664299:web:aa3696fe1fd7b580a4126e",
    measurementId: "G-5FY09ZC5R7"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);