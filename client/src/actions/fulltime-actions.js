// node modules
import axios from 'axios';

// API
import API from './api';

export const FulltimeConstants = {
  GET_FULLTIMES: 'GET_FULLTIMES',
  GET_ONE_FULLTIME: 'GET_ONE_FULLTIME',
  CLEAR_ACTIVE_FULLTIME: 'CLEAR_ACTIVE_FULLTIME',
  CREATE_FULLTIME: 'CREATE_FULLTIME',
  UPDATE_FULLTIME: 'UPDATE_FULLTIME',
  DELETE_FULLTIME: 'DELETE_FULLTIME'
};

export const FulltimeActions = {
  getFulltimes: (search = '') => async (dispatch) => {
    const params = { search };
    const res = await axios.get(API.GET_FULLTIMES, { params });
    dispatch({
      type: FulltimeConstants.GET_FulltimeS,
      Fulltimes: res.data
    });
  },

  getOneFulltime: FulltimeId => async (dispatch) => {
    const params = { FulltimeId };
    const res = await axios.get(API.GET_ONE_FULLTIME, { params });
    dispatch({
      type: FulltimeConstants.GET_ONE_FULLTIME,
      activeFulltime: res.data
    });
  },

  updateFulltime: (FulltimeId, newActiveFulltime) => async (dispatch) => {
    const params = { FulltimeId, newActiveFulltime };
    const res = await axios.put(API.UPDATE_FULLTIME, params);

    if (res.status === 200) {
      dispatch({
        type: FulltimeConstants.UPDATE_FULLTIME,
        activeFulltime: res.data
      });
    } else {
      // respond with an error message
    }
    return res.status;
  },

  clearActiveFulltime: dispatch => ({
    type: FulltimeConstants.CLEAR_ACTIVE_FULLTIME
  }),

  createFulltime: Fulltime => async (dispatch) => {
    const res = await axios.post(API.CREATE_FULLTIME, Fulltime);

    if (res.status === 201) {
      dispatch({
        type: FulltimeConstants.CREATE_FULLTIME,
        activeFulltime: res.data
      });
    } else {
      // respond with an error message;
    }
    return res.status;
  },

  deleteFulltime: FulltimeId => async (dispatch) => {
    const params = { FulltimeId };

    const res = await axios.delete(API.DELETE_FULLTIME, { params });

    if (res.status === 200 || res.status === 204) {
      dispatch({
        type: FulltimeConstants.DELETE_FULLTIME
      });
    } else {
      // respond with an error message
    }
    return res.status;
  }
};
