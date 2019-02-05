import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_STORAGE_BUCKET
} from 'react-native-dotenv';

const firebase = Object.freeze({
  apiKey: FIREBASE_API_KEY as string || '',
  authDomain: FIREBASE_AUTH_DOMAIN as string || '',
  databaseURL: FIREBASE_DATABASE_URL as string || '',
  storageBucket: FIREBASE_STORAGE_BUCKET as string || ''
});

export default firebase;

/*

import * as firebase from 'firebase';

  // Initialize Firebase
var config = {
    apiKey: "AIzaSyAhsmOfrQyq23HylG-Csb_qgWVlr7HGbrc",
    authDomain: "aty-client.firebaseapp.com",
    databaseURL: "https://aty-client.firebaseio.com",
    projectId: "aty-client",
    storageBucket: "aty-client.appspot.com",
    messagingSenderId: "34898956141"
};
firebase.initializeApp(config);

export const Firebase = firebase;
*/