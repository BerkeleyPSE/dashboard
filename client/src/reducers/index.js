import { combineReducers } from 'redux';

import ApplicationReducer from './application-reducer';
import AuthReducer from './auth-reducer';
import BrotherReducer from './brother-reducer';
import CareerReducer from './career-reducer';
import FaqReducer from './faq-reducer';
import UserReducer from './user-reducer';

const rootReducer = combineReducers({
  ApplicationReducer,
  AuthReducer,
  BrotherReducer,
  CareerReducer,
  FaqReducer,
  UserReducer,
});

export default rootReducer;
