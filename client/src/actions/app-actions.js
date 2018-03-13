// node modules
import axios from 'axios';

// API
import API from './api';

export const AppConstants = {
  DELETE_APPS: 'DELETE_APPS',
  DELETE_ONE_APP: 'DELETE_ONE_APP',
  CLEAR_ACTIVE_APP: 'CLEAR_ACTIVE_APP',
  GET_APPS: 'GET_APPS',
  GET_ONE_APP: 'GET_ONE_APP'
};

export const AppActions = {
  getApps: (search = '') => async (dispatch) => {
    const params = { search };
    const res = await axios.get(API.GET_APPS, { params });
    dispatch({
      type: AppConstants.GET_APPS,
      apps: res.data
    });
  },

  getOneApp: appId => async (dispatch) => {
    const params = { appId };
    const res = await axios.get(API.GET_ONE_APP, { params });
    dispatch({
      type: AppConstants.GET_ONE_APP,
      activeApp: res.data
    });
  },

  deleteOneApp: appId => async (dispatch) => {
    const params = { appId };

    const res = await axios.delete(API.DELETE_ONE_APP, { params });

    if (res.status === 200 || res.status === 204) {
      dispatch({
        type: AppConstants.DELETE_ONE_APP
      });
    } else {
      // respond with an error message
    }
    return res.status;
  },

  deleteApps: () => async (dispatch) => {
    const res = await axios.delete(API.DELETE_APPS, {});

    if (res.status === 200 || res.status === 204) {
      dispatch({
        type: AppConstants.DELETE_APPS
      });
    } else {
      // respond with an error message
    }
    return res.status;
  },

  clearActiveApp: () => ({
    type: AppConstants.CLEAR_ACTIVE_APP
  })
};
