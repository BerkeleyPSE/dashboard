import { AuthConstants } from '../actions/auth-actions';

const initialState = {
  name: '',
  email: '',
  editMode: false,
  isLoggedIn: false,
  role: '',
  error: ''
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthConstants.AUTHENTICATION_ERROR:
    case AuthConstants.LOGOUT:
      return initialState;
    case AuthConstants.GET_USER:
    case AuthConstants.SET_USER_EDIT_MODE:
      return { ...state, ...action };
    default:
      return state;
  }
};

export default AuthReducer;
