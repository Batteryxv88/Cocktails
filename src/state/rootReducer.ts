import { combineReducers } from "redux";
import { cocktails } from "./cocktales/cocktailsReducer";
import { isCardOpen } from "./cardIsOpen/cardIsOpenReducer";
import { openPopup } from "./openPopup/openPopupReducer";
import { comments } from "./comments/commentsReducer";


export  const rootReducer = combineReducers({
    cocktails,
    openPopup,
    isCardOpen,
    comments
});

export type RootState = ReturnType<typeof rootReducer>

