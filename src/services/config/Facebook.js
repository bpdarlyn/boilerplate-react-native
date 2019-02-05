import {
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
} from 'react-native-dotenv';

const facebook = Object.freeze({
  appId: FACEBOOK_APP_ID as string || '',
  appSecret: FACEBOOK_APP_SECRET as string || '',
});

export default facebook;
/*

import { fbLoginPermissions } from '../constants/Constants';
import firebase from './config/firebase';
import Auth from './config/auth';
export const handleFbLogin = () => (
  Auth.Facebook.login(fbLoginPermissions)
    .then((token) => {
      firebase.auth()
        .signInWithCredential(firebase.auth.FacebookAuthProvider.credential(token))
    })
    .catch((err) => this.onError && this.onError(err))
);

*/