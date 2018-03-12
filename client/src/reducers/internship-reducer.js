import { InternshipConstants } from '../actions/internship-actions';

const initialState = {
  internships: [],
  activeInternship: {}
};

const InternshipReducer = (state = initialState, action) => {
  switch (action.type) {
    case InternshipConstants.CLEAR_ACTIVE_INTERNSHIP:
    case InternshipConstants.DELETE_INTERNSHIP:
      return { ...state, activeInternship: {} };
    case InternshipConstants.GET_INTERNSHIPS:
    case InternshipConstants.GET_ONE_INTERNSHIP:
    case InternshipConstants.UPDATE_INTERNSHIP:
    case InternshipConstants.CREATE_INTERNSHIP:
      return { ...state, ...action };
    default:
      return state;
  }
};

export default InternshipReducer;
