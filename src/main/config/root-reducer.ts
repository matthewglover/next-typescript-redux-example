import { combineReducers } from '@reduxjs/toolkit';
import greetingReducer from '../feature/greeting/store';

const rootReducer = combineReducers({
  greeting: greetingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
