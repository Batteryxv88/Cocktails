import { combineReducers } from 'redux';
import { isCardOpen } from './cardIsOpen/cardIsOpenReducer';
import { openPopup } from './openPopup/openPopupReducer';
import { comments } from './comments/commentsReducer';
import cocktailsSlice from './cocktales/cocktailsSlice';
import filteredGridSlice from './filteredItem/filteredGridSlice';

export const rootReducer = combineReducers({
  cocktailsSlice,
  filteredGridSlice,
  openPopup,
  isCardOpen,
  comments,
});

export type RootState = ReturnType<typeof rootReducer>;
