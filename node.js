// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxKIjc4oamJcbxSpc_JXs1JevdHk_nxgk",
  authDomain: "prepa-h.firebaseapp.com",
  projectId: "prepa-h",
  storageBucket: "prepa-h.firebasestorage.app",
  messagingSenderId: "252096818674",
  appId: "1:252096818674:web:eeee54b5fd936789650f6b",
  measurementId: "G-8S2ZNC74FW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
