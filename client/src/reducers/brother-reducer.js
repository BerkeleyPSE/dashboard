import { BrotherConstants } from '../actions/brother-actions';

const initialState = {
  brothers: [],
  activeBrother: {}
};

const BrotherReducer = (state = initialState, action) => {
  switch (action.type) {
    case BrotherConstants.CLEAR_ACTIVE_BROTHER:
    case BrotherConstants.DELETE_BROTHER:
      return { ...state, activeBrother: {} };
    case BrotherConstants.GET_BROTHERS:
    case BrotherConstants.GET_ONE_BROTHER:
    case BrotherConstants.UPDATE_BROTHER:
    case BrotherConstants.CREATE_BROTHER:
      return { ...state, ...action };
    default:
      return state;
  }
};

export default BrotherReducer;
