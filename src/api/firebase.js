import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyDfhtBXiIspWg5VyrHbr2Vv8CZzoyVFeTM",
  authDomain: "test-store-d9ab1.firebaseapp.com",
  projectId: "test-store-d9ab1",
  storageBucket: "test-store-d9ab1.appspot.com",
  messagingSenderId: "407361830121",
  appId: "1:407361830121:web:37947755d364021b59c478",
  measurementId: "G-PKB6GLE0FD"
};

export const firebase_app = firebase.initializeApp(firebaseConfig);