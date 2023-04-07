import { TOGGLE_POPUP, TOGGLE_FORM, POPUP_CLOSED } from "./openPopupConst";

export const popupToggle = ({
    type: TOGGLE_POPUP,
})

export const popupClosed = ({
    type: POPUP_CLOSED,
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

export type PopupClosed = {
    type: typeof POPUP_CLOSED,
}