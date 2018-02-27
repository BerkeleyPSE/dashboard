import { BrotherConstants } from '../actions/brother-actions';

const initialState = {
  brothers: [],
  activeBrother: {}
};

const BrotherReducer = (state = initialState, action) => {
  switch (action.type) {
    case BrotherConstants.GET_BROTHERS:
    case BrotherConstants.GET_ONE_BROTHER:
      return { ...state, ...action };
    default:
      return state;
  }
};

export default BrotherReducer;
