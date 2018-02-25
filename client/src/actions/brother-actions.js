// node modules
import axios from 'axios';

// API
import API from './api';

export const BrotherConstants = {
  GET_BROTHERS: 'GET_BROTHERS'
};

export const BrotherActions = {
  getBrothers: (brotherId = '', sort = {}, filter = {}, search = '') => async (dispatch) => {
    const params = {
      brotherId,
      sort,
      filter,
      search
    };

    const res = await axios.get(API.GET_BROTHERS, { params });
    dispatch({
      type: BrotherConstants.GET_BROTHERS,
      brothers: res.data
    });
  }
};
