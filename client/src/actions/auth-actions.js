import axios from 'axios';

export const AuthConstants = {
  SET_USER_CAN_EDIT: 'SET_USER_CAN_EDIT'
};

export const AuthActions = {
  setUserCanEdit: bool => ({
    type: AuthConstants.SET_USER_CAN_EDIT,
    canEdit: bool
  })
};
