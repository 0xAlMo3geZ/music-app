import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAuWRtmtECx-uIBp4iMfj_Xn_OuMMp9aV0',
  authDomain: 'music-app-e4ca5.firebaseapp.com',
  projectId: 'music-app-e4ca5',
  storageBucket: 'music-app-e4ca5.appspot.com',
  messagingSenderId: '43059986651',
  appId: '1:43059986651:web:0f9b8a6f6f1dccd7ae0cfe',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
