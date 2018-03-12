// node modules
import axios from 'axios';

// API
import API from './api';

export const InternshipConstants = {
  GET_INTERNSHIPS: 'GET_INTERNSHIPS',
  GET_ONE_INTERNSHIP: 'GET_ONE_INTERNSHIP',
  CLEAR_ACTIVE_INTERNSHIP: 'CLEAR_ACTIVE_INTERNSHIP',
  CREATE_INTERNSHIP: 'CREATE_INTERNSHIP',
  UPDATE_INTERNSHIP: 'UPDATE_INTERNSHIP',
  DELETE_INTERNSHIP: 'DELETE_INTERNSHIP'
};

export const InternshipActions = {
  getInternships: (search = '') => async (dispatch) => {
    const params = { search };
    const res = await axios.get(API.GET_INTERNSHIPS, { params });
    dispatch({
      type: InternshipConstants.GET_INTERNSHIPS,
      internships: res.data
    });
  },

  getOneInternship: internshipId => async (dispatch) => {
    const params = { internshipId };
    const res = await axios.get(API.GET_ONE_INTERNSHIP, { params });
    dispatch({
      type: InternshipConstants.GET_ONE_INTERNSHIP,
      activeInternship: res.data
    });
  },

  updateInternship: (internshipId, newActiveInternship) => async (dispatch) => {
    const params = { internshipId, newActiveInternship };
    const res = await axios.put(API.UPDATE_INTERNSHIP, params);

    if (res.status === 200) {
      dispatch({
        type: InternshipConstants.UPDATE_INTERNSHIP,
        activeInternship: res.data
      });
    } else {
      // respond with an error message
    }
    return res.status;
  },

  clearActiveInternship: dispatch => ({
    type: InternshipConstants.CLEAR_ACTIVE_INTERNSHIP
  }),

  createInternship: internship => async (dispatch) => {
    const res = await axios.post(API.CREATE_INTERNSHIP, internship);

    if (res.status === 201) {
      dispatch({
        type: InternshipConstants.CREATE_INTERNSHIP,
        activeInternship: res.data
      });
    } else {
      // respond with an error message;
    }
    return res.status;
  },

  deleteInternship: internshipId => async (dispatch) => {
    const params = { internshipId };

    const res = await axios.delete(API.DELETE_INTERNSHIP, { params });

    if (res.status === 200 || res.status === 204) {
      dispatch({
        type: InternshipConstants.DELETE_INTERNSHIP
      });
    } else {
      // respond with an error message
    }
    return res.status;
  }
};
