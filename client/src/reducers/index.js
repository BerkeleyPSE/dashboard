import { combineReducers } from 'redux';

import AppReducer from './app-reducer';
import AuthReducer from './auth-reducer';
import BrotherReducer from './brother-reducer';
import FulltimeReducer from './fulltime-reducer';
import InternshipReducer from './internship-reducer';
import FaqReducer from './faq-reducer';
import RegformReducer from './regform-reducer';
import UserReducer from './user-reducer';

const rootReducer = combineReducers({
  AppReducer,
  AuthReducer,
  BrotherReducer,
  FulltimeReducer,
  InternshipReducer,
  FaqReducer,
  RegformReducer,
  UserReducer
});

export default rootReducer;
