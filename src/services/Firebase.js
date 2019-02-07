/*
import * as firebase from 'firebase';
  // Initialize Firebase
const config = {
    apiKey: "AIzaSyAhsmOfrQyq23HylG-Csb_qgWVlr7HGbrc",
    authDomain: "aty-client.firebaseapp.com",
    databaseURL: "https://aty-client.firebaseio.com",
    projectId: "aty-client",
    storageBucket: "aty-client.appspot.com",
    messagingSenderId: "34898956141"
};
firebase.initializeApp(config);

export const autenticacion = firebase.auth();
export const baseDeDatos = firebase.database();
*/
import firebase from 'react-native-firebase'

export const autenticacion = firebase.auth();
export const baseDeDatos = firebase.database();