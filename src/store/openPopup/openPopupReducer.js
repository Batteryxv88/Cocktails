import { TOGGLE_POPUP, TOGGLE_FORM } from './openPopupConst';
const defaultState = {
  isPopupOpen: false,
  isLoginFormOpen: true,
};

export const openPopup = (state = defaultState, action) => {
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
