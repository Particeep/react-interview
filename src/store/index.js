import { configureStore } from '@reduxjs/toolkit';

import mainReducer from './mainSlice';

const store = configureStore({
  reducer: { main: mainReducer }
});

export default store;