// node modules
import axios from 'axios';

// API
import API from './api';

export const BrotherConstants = {
  GET_BROTHERS: 'GET_BROTHERS',
  GET_ONE_BROTHER: 'GET_ONE_BROTHER',
  CREATE_BROTHER: 'CREATE_BROTHER',
  UPDATE_BROTHER: 'UPDATE_BROTHER'
};

export const BrotherActions = {
  getBrothers: (search = '') => async (dispatch) => {
    const params = { search };
    const res = await axios.get(API.GET_BROTHERS, { params });
    dispatch({
      type: BrotherConstants.GET_BROTHERS,
      brothers: res.data
    });
  },

  getOneBrother: brotherId => async (dispatch) => {
    const params = { brotherId };
    const res = await axios.get(API.GET_ONE_BROTHER, { params });
    dispatch({
      type: BrotherConstants.GET_ONE_BROTHER,
      activeBrother: res.data
    });
  },

  createBrother: brother => async (dispatch) => {
    const params = { ...brother };

    const res = await axios.post(API.CREATE_BROTHER, params);

    if (res.status === 201) {
      dispatch({
        type: BrotherConstants.GET_BROTHERS,
        brothers: res.data
      });
    } else {
      // respond with an error message;
    }
  },

  updateBrother: (brotherId = '', newInfo) => async (dispatch) => {
    const params = { ...newInfo };

    // update the brother in the database
    const res = await axios.put(API.UPDATE_BROTHER, { params });

    // check that the brother was updated successfully
    if (res.status === 204) {
      dispatch({
        type: BrotherConstants.GET_BROTHERS,
        brothers: res.data
      });
    } else {
      // respond with an error message
    }
  },

  deleteBrother: brotherId => async (dispatch) => {
    const params = { brotherId };

    const res = await axios.delete(API.DELETE_BROTHER, { params });

    if (res.status === 200 || res.status === 204) {
      dispatch({
        type: BrotherConstants.GET_BROTHERS,
        brothers: res.data
      });
    } else {
      // respond with an error message
    }
  }
};
