import { AppConstants } from '../actions/app-actions';

const initialState = {
  apps: [],
  activeApp: {}
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppConstants.DELETE_APPS:
      return { ...state, apps: [], activeApp: {} };
    case AppConstants.CLEAR_ACTIVE_APP:
    case AppConstants.DELETE_ONE_APP:
      return { ...state, activeApp: {} };
    case AppConstants.GET_APPS:
    case AppConstants.GET_ONE_APP:
      return { ...state, ...action };
    default:
      return state;
  }
};

export default AppReducer;
