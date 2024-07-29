import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store=configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializable: true})
})

export default store;