// node modules
import axios from 'axios';

// API
import API from './api';

export const RegformConstants = {
  DELETE_REGFORMS: 'DELETE_REGFORMS',
  CLEAR_ACTIVE_REGFORM: 'CLEAR_ACTIVE_REGFORM',
  GET_REGFORMS: 'GET_REGFORMS',
  GET_ONE_REGFORM: 'GET_ONE_REGFORM'
};

export const RegformActions = {
  getRegforms: (search = '') => async (dispatch) => {
    const params = { search };
    const res = await axios.get(API.GET_REGFORMS, { params });
    dispatch({
      type: RegformConstants.GET_REGFORMS,
      regforms: res.data
    });
  },

  getOneRegform: regformId => async (dispatch) => {
    const params = { regformId };
    const res = await axios.get(API.GET_ONE_REGFORM, { params });
    dispatch({
      type: RegformConstants.GET_ONE_REGFORM,
      activeRegform: res.data
    });
  },

  deleteRegforms: () => async (dispatch) => {
    const res = await axios.delete(API.DELETE_REGFORMS, {});

    if (res.status === 200 || res.status === 204) {
      dispatch({
        type: RegformConstants.DELETE_REGFORMS
      });
    } else {
      // respond with an error message
    }
    return res.status;
  },

  clearActiveRegform: () => ({
    type: RegformConstants.CLEAR_ACTIVE_REGFORM
  })
};
