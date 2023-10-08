// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGrAVAQsVJV1hMJj9Uzbvwl1tG73au25U",
  authDomain: "ekri-53931.firebaseapp.com",
  projectId: "ekri-53931",
  storageBucket: "ekri-53931.appspot.com",
  messagingSenderId: "1039185785220",
  appId: "1:1039185785220:web:32f466997533031cf72dd1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = { app, auth };
