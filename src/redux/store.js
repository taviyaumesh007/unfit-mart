// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slice';

const store = configureStore({
  reducer: {
    filters: filterReducer, // Add filterSlice reducer here
  },
});

export default store;
