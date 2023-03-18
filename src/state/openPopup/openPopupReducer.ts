import { TOGGLE_POPUP, TOGGLE_FORM, POPUP_CLOSED } from './openPopupConst';
import { RootActionsType } from '../rootActionsTypes';
import { type } from 'os';

type DefaultState = {
  isPopupOpen: null | boolean,
  isLoginFormOpen: null | boolean,
}

const defaultState = {
  isPopupOpen: false,
  isLoginFormOpen: null,
};

export const openPopup = (state: DefaultState = defaultState, action: RootActionsType) => {
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
    case POPUP_CLOSED: {
      return state = {
        isPopupOpen: false,
        isLoginFormOpen: null,
        };
  }
    default: {
      return defaultState;
    }
  }
};
