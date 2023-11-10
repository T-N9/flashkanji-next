import { configureStore } from '@reduxjs/toolkit';
import flashGroundReducer from './flashGroundSlice';

export const store = configureStore({
  reducer: {
    flashGroundReducer
  },
})