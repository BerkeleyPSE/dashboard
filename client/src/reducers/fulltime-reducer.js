import { FulltimeConstants } from '../actions/fulltime-actions';

const initialState = {
  fulltimes: [],
  activeFulltime: {}
};

const FulltimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FulltimeConstants.CLEAR_ACTIVE_FULLTIME:
    case FulltimeConstants.DELETE_FULLTIME:
      return { ...state, activeFulltime: {} };
    case FulltimeConstants.GET_FULLTIMES:
    case FulltimeConstants.GET_ONE_FULLTIME:
    case FulltimeConstants.UPDATE_FULLTIME:
    case FulltimeConstants.CREATE_FULLTIME:
      return { ...state, ...action };
    default:
      return state;
  }
};

export default FulltimeReducer;
