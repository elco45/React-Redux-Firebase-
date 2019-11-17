import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
const config = {
  apiKey: 'AIzaSyDk0mKf5RmzTI84ukfO0rjWa-edFosR3jU',
  authDomain: 'reactreduxfirebas.firebaseapp.com',
  databaseURL: 'https://reactreduxfirebas.firebaseio.com',
  projectId: 'reactreduxfirebas',
  storageBucket: 'reactreduxfirebas.appspot.com',
  messagingSenderId: '1073791625057',
  appId: '1:1073791625057:web:4575c9dffe68ef82150720'
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
