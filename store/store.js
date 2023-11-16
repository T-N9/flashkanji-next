import { configureStore } from '@reduxjs/toolkit';
import flashGroundReducer from './flashGroundSlice';
import generalReducer from './generalSlice';
import quizGroundReducer from './quizGroundSlice';

export const store = configureStore({
  reducer: {
    flashGroundReducer,
    generalReducer,
    quizGroundReducer
  },
})