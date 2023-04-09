import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';


export const store = configureStore({
  reducer: rootReducer 
});

export type AppDispatch = typeof store.dispatch;
