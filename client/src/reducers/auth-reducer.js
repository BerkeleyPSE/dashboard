import { AuthConstants } from '../actions/auth-actions';

const initialState = {
  name: 'Rahul Rangnekar',
  email: 'berkeleypse.tech@gmail.com',
  canEdit: false,
  isLoggedIn: true
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthConstants.SET_USER_CAN_EDIT:
      return { ...state, ...action };
    default:
      return state;
  }
};

export default AuthReducer;
