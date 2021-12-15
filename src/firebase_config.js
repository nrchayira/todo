import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyArjqi0lC6wpeT3dJmClyUaNeJR76TQxr4",
    authDomain: "todo-6766b.firebaseapp.com",
    projectId: "todo-6766b",
    storageBucket: "todo-6766b.appspot.com",
    messagingSenderId: "172033181373",
    appId: "1:172033181373:web:8bd7b02f307ace2fd359d4"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export { db };
