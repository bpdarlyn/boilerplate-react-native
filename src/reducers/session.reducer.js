import * as actions from '../constants/actionTypes';
import initialState from '../states/User.state';

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN_REQUESTING:
      return {
        ...state,
        user: action.user,
        loginRequesting:false,
        error: null,
        message: '',
        isLogged: false
      };
    case actions.LOGIN_SUCCESSFULLY:
      return {
        ...state,
        user:action.user,
        loginRequesting:true,
        error: null,
        message: '',
        isLogged: true
      };
    case actions.LOGIN_ERROR:
      return {
        ...state,
        user:null,
        loginRequesting:false,
        error: action.error,
        message: action.message,
        isLogged: false
      };
    case actions.LOG_OUT:
      return {
        ...state,
        user:null,
        loginRequesting:false,
        error: null,
        message: null,
        isLogged: false
      };

    default:
      return state;
  }
}
