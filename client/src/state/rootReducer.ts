import { combineReducers } from 'redux';
//import { cocktails } from './cocktales/cocktailsReducer';
import { isCardOpen } from './cardIsOpen/cardIsOpenReducer';
import { openPopup } from './openPopup/openPopupReducer';
import { comments } from './comments/commentsReducer';
import toolkitSlice from './cocktales/toolkitSlice';
import { applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
  toolkitSlice,
  openPopup,
  isCardOpen,
  comments,
});

export type RootState = ReturnType<typeof rootReducer>;
