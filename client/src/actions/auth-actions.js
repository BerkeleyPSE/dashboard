// node modules
import axios from 'axios';

// local
import API from './api';
import { isEmptyOrUndefined } from '../helpers/helpers';

export const AuthConstants = {
  AUTHENTICATION_ERROR: 'AUTHENTICATION_ERROR',
  GET_USER: 'GET_USER',
  LOGOUT: 'LOGOUT',
  SET_USER_EDIT_MODE: 'SET_USER_EDIT_MODE'
};

export const AuthActions = {
  getUser: () => async (dispatch) => {
    const res = await axios.get(API.GET_SELF);
    if (isEmptyOrUndefined(res.data)) {
      return dispatch({
        type: AuthConstants.AUTHENTICATION_ERROR,
        error: 'User could not be authenticated.'
      });
    }
    return dispatch({
      type: AuthConstants.GET_USER,
      isLoggedIn: true,
      ...res.data
    });
  },

  logoutUser: () => async (dispatch) => {
    await axios.get(API.LOGOUT);
    return dispatch({
      type: AuthConstants.LOGOUT
    });
  },

  setUserEditMode: bool => ({
    type: AuthConstants.SET_USER_EDIT_MODE,
    editMode: bool
  })
};
