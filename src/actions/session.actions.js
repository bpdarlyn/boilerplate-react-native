import {Alert} from 'react-native';
import axios from 'axios';
import NavigationService from "../utils/Navigator";
import firebase from "react-native-firebase";
import * as actions from '../constants/actionTypes';
import * as routes from '../constants/serverRoutes';
import {fetchingMyServices, fetchingServicesError, fetchMyServicesSuccessfully} from "./services.actions";

export function requestLoginSuccess(user) {
  return {
    type: actions.LOGIN_SUCCESSFULLY,
    user: user
  };
}

export function requestingLogin() {
  return {
    type: actions.LOGIN_REQUESTING
  };
}

export function requestingLoginError(error, message) {
  Alert.alert(error, message);
  return {
    type: actions.LOGIN_ERROR,
    error,
    message
  };
}


export function login(email, password, redirectPage = null, parameters = {}) {
  return async function (dispatch) {
    dispatch(requestingLogin());
    axios.post(routes.LOGIN, {
      email: email,
      password: password
    })
        .then(res => {

          // Analize data response
          const {type, data, message} = res.data;
          if (type === "SUCCESSFULLY") {
            dispatch(requestLoginSuccess(data));
            NavigationService.navigate('App')
          } else {
            dispatch(requestingLoginError(type, message));
          }
        })
        .catch(error => {
          dispatch(requestingLoginError('SERVER ERROR', error.response));
        });
  }
}


export function logOutSuccessfully() {
  return {
    type: actions.LOG_OUT
  }
}

export function logout() {
  return (dispatch) => {
    dispatch(logOutSuccessfully());
    NavigationService.navigate('Auth');
  }
}

export function checkPermissionNotification(){
  return (dispatch,getState) =>{
    firebase.messaging().hasPermission()
        .then(enabled => {
          if (enabled) {
            // user has permissions
            // dispatch(updatePermissionNotification(true));
            console.log('notification enabled');
          } else {
            firebase.messaging().requestPermission()
                .then(() => {
                  console.log('has permission');
                  // User has authorised
                  // dispatch(updatePermissionNotification(true));
                })
                .catch(error => {
                  // dispatch(updatePermissionNotification(false));
                  // User has rejected permissions
                  console.log('it does not have permission',error);
                });
          }
        });
  };
}

export function refreshingToken(){
  return {
    type: actions.REFRESHING_FIREBASE_TOKEN
  }
}

export function errorTokenFirebase(error,message){
  return {
    type: actions.REFRESH_TOKEN_FIREBASE_ERROR,
    error,
    message
  }
}

export function successfullyTokenFirebase(tokenFirebase){
  Alert.alert(error, message);
  return {
    type: actions.REFRESH_TOKEN_FIREBASE_SUCCESSFULLY,
    token_firebase: tokenFirebase
  }
}



export function refreshTokenServer(newToken) {
  console.log('REFRESH TOKEN SERVER');
  return async (dispatch, state) => {
    const {user} = state().session;
    if (user && state().session.isLogged) {
      dispatch(refreshingToken());
      console.log('USER IS LOGGED TO SEND REFRESH TOKEN SERVER');
      const {authentication_token} = user;
      axios.post(routes.REFRESH_TOKEN_FIREBASE,{
          access_token: authentication_token,
          firebase_token: newToken
      }).then((res) => {
        const {type,message, data} = res.data;
        if (type === "SUCCESSFULLY") {
          console.log(data);
          return dispatch(successfullyTokenFirebase(data));
        }else{
          return dispatch(errorTokenFirebase(type,message));
        }
      }).catch((res)=>{
        return dispatch(errorTokenFirebase('ERROR REQUEST',res.message));
      })
    }else{
      console.log('USER NO LOGGED WANT TO REFRESH TOKEN');
      return dispatch(errorTokenFirebase('ERROR TOKEN REFRESHING','ERROR'));
    }
  }
}
