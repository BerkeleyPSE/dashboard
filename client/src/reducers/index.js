import { combineReducers } from 'redux';

import AppReducer from './app-reducer';
import AuthReducer from './auth-reducer';
import BrotherReducer from './brother-reducer';
import FulltimeReducer from './fulltime-reducer';
import InternshipReducer from './internship-reducer';
import RegformReducer from './regform-reducer';

const rootReducer = combineReducers({
  AppReducer,
  AuthReducer,
  BrotherReducer,
  FulltimeReducer,
  InternshipReducer,
  RegformReducer
});

export default rootReducer;
