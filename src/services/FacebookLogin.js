/*
import { LoginManager } from "react-native-fbsdk";

const FBSDK = require('react-native-fbsdk');
const {LoginButton, AccessToken } = FBSDK;

import { firebase } from '../services/Firebase';
*/
import React from 'react';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
//import { firebase } from '../services/Firebase';
import firebase from 'react-native-firebase'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class FacebookLogin extends React.Component {
  // Calling the following function will open the FB login dialogue:
  facebookLogin = async () => {
    
    try {
      const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

      if (result.isCancelled) {
        // <App />;
        return;
        // throw new Error('User cancelled request'); // Handle this however fits the flow of your app
      }

      console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

      // get the access token
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
      }

      // create a new firebase credential with the token
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

      // login with credential
      const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
      console.log(currentUser);
      console.info(JSON.stringify(currentUser.user.toJSON()));
    } catch (e) {
      console.error(e);
    }
    
  }


  render () {
    return (
      <View>
        <TouchableOpacity style={styles.buttonFaceBook} onPress={this.facebookLogin}>
            <Text style={styles.buttonText}>Ingresar con Facebook</Text>
        </TouchableOpacity> 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonFaceBook: {
    width:300,
    backgroundColor:'#3c50e8',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  }
});

export default FacebookLogin;
/*
export default class AuthServiceFacebook {
// Calling the following function will open the FB login dialogue:
  async facebookLogin() {
    try {
      const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

      if (result.isCancelled) {
        // handle this however suites the flow of your app
        throw new Error('User cancelled request'); 
      }

      console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

      // get the access token
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        // handle this however suites the flow of your app
        throw new Error('Something went wrong obtaining the users access token');
      }

      // create a new firebase credential with the token
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

      // login with credential
      const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);

      console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()))
    } catch (e) {
      console.error(e);
    }
  }
  async logout() {
    
    return firebase.auth().signOut();
  }
}
*/