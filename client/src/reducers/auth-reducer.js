import { AuthConstants } from '../actions/auth-actions';

const initialState = {};
// name
// email
// editing (t/f) --> default to false on load

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default AuthReducer;
