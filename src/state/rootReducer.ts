import { combineReducers } from "redux";
import { cocktails } from "./cocktales/cocktailsReducer";
import { isCardOpen } from "./cardIsOpen/cardIsOpenReducer";
import { openPopup } from "./openPopup/openPopupReducer";


export  const rootReducer = combineReducers({
    cocktails,
    openPopup,
    isCardOpen
});

export type RootState = ReturnType<typeof rootReducer>

