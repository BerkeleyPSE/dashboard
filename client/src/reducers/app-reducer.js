import { AppConstants } from '../actions/app-actions';

const initialState = {
  apps: [],
  activeApp: {}
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default AppReducer;
