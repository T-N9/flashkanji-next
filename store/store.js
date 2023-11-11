import { configureStore } from '@reduxjs/toolkit';
import flashGroundReducer from './flashGroundSlice';
import generalReducer from './generalSlice';

export const store = configureStore({
  reducer: {
    flashGroundReducer,
    generalReducer
  },
})