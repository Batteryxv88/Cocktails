import { TOGGLE_POPUP, TOGGLE_FORM } from './openPopupConst';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootActionsType } from '../rootActionsTypes';
const defaultState = {
  isPopupOpen: false,
  isLoginFormOpen: true,
};

export const openPopup = (state = defaultState, action: RootActionsType) => {
  switch (action.type) {
    case TOGGLE_POPUP: {
      return state = {
        isPopupOpen: !state.isPopupOpen,
        isLoginFormOpen: true,
      };
    }
    case TOGGLE_FORM: {
        return state = {
            isPopupOpen: true,
            isLoginFormOpen: false,
          };
    }
    default: {
      return defaultState;
    }
  }
};
