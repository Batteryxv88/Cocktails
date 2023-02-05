import { combineReducers } from "redux";
import { coctails } from "./coctails/coctailsReducer";
import { isCardOpen } from "./cardIsOpen/cardIsOpenReducer";
import { openPopup } from "./openPopup/openPopupReducer";

export  const rootReducer = combineReducers({
    coctails,
    isCardOpen,
    openPopup,
});