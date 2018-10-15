import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC4Q8Fb-REEhRnha3GMTbo1bADeB8_Lo2s',
  authDomain: 'catch-of-the-day-4e6e9.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-4e6e9.firebaseio.com',
  projectId: 'catch-of-the-day-4e6e9',
  storageBucket: 'catch-of-the-day-4e6e9.appspot.com',
  messagingSenderId: '413573931965'
});

const base = Rebase.createClass(firebase.database());

// this is a named export
export { firebaseApp };

// this is a defaualt export
export default base;
