
import firebase from 'firebase';


const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyD77XzMgtvBHhxTi04FbLSas1Vc7As8QgM",
    authDomain: "todo-cp-d8b24.firebaseapp.com",
    projectId: "todo-cp-d8b24",
    storageBucket: "todo-cp-d8b24.appspot.com",
    messagingSenderId: "725286421096",
    appId: "1:725286421096:web:bae4553a7b8f5b06f2f1dd",
    measurementId: "G-KE8B7X6MZ0"
});

const db=firebaseApp.firestore();
export default db; 
