import { STR_ALK_FILTER, LOW_ALK_FILTER, NON_ALK_FILTER, HOME } from "./cocktailsConst"

export const setStrAlk = ({
    type: STR_ALK_FILTER
})

export const setLowAlk = ({
    type: LOW_ALK_FILTER
})

export const setNonAlk = ({
    type: NON_ALK_FILTER
})

export const setHome = ({
    type: HOME
})

export type SetStrAlk = {
    type: typeof STR_ALK_FILTER,
}

export type SetLowAlk = {
    type: typeof LOW_ALK_FILTER,
}

export type SetNonAlk = {
    type: typeof NON_ALK_FILTER,
}

export type SetHome = {
    type: typeof HOME,
}