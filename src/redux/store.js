import { configureStore } from '@reduxjs/toolkit';
import matchReducer from './matchReducer/matchSlice';

export const store = configureStore({
  reducer: {
    match: matchReducer
  },
});
