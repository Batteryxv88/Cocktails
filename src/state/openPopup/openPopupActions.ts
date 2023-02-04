import { TOGGLE_POPUP, TOGGLE_FORM } from "./openPopupConst";

export const popupToggle = ({
    type: TOGGLE_POPUP,
})

export const formToggle = ({
    type: TOGGLE_FORM,
})

export type PopupToggle = {
    type: typeof TOGGLE_POPUP,
}

export type FormToggle = {
    type: typeof TOGGLE_FORM,
}