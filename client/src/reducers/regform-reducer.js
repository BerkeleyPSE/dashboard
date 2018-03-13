import { RegformConstants } from '../actions/regform-actions';

const initialState = {
  regforms: [],
  activeRegform: {}
};

const RegformReducer = (state = initialState, action) => {
  switch (action.type) {
    case RegformConstants.DELETE_REGFORMS:
      return { ...state, regforms: [], activeRegform: {} };
    case RegformConstants.CLEAR_ACTIVE_REGFORM:
    case RegformConstants.DELETE_ONE_REGFORM:
      return { ...state, activeRegform: {} };
    case RegformConstants.GET_REGFORMS:
    case RegformConstants.GET_ONE_REGFORM:
      return { ...state, ...action };
    default:
      return state;
  }
};

export default RegformReducer;
