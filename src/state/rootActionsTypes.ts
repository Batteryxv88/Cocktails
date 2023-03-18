
import { SetAllComments } from './comments/commentsActions';
import { SetStrAlk, SetLowAlk, SetNonAlk, SetHome } from './cocktales/cocktailsActions';
import { PopupToggle, FormToggle, PopupClosed } from "./openPopup/openPopupActions"
import { CardToggle } from "./cardIsOpen/cardIsOpenActions"

export type RootActionsType = PopupToggle | PopupClosed | FormToggle | CardToggle | SetStrAlk | SetLowAlk | SetNonAlk | SetHome | SetAllComments