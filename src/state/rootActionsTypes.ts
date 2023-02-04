import { SetStrAlk, SetLowAlk, SetNonAlk, SetHome } from './cocktales/cocktailsActions';
import { PopupToggle, FormToggle } from "./openPopup/openPopupActions"
import { CardToggle } from "./cardIsOpen/cardIsOpenActions"

export type RootActionsType = PopupToggle | FormToggle | CardToggle | SetStrAlk | SetLowAlk | SetNonAlk | SetHome