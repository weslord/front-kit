import * as TD from 'types'

import { dropLast, without } from 'ramda'
import { createSlice } from '@reduxjs/toolkit'

const modalsSlice = createSlice({
    name: 'modals',
    initialState: [] as TD.ModalTypes[],
    reducers: {
        open: (state, action: { payload: { modalType: TD.ModalTypes } }) => {
            const { modalType } = action.payload

            return [...without([modalType], state), modalType]
        },
        close: (state) => {
            return dropLast(1, state)
        },
    },
})

export const modalsReducer = modalsSlice.reducer
export const modalsActions = modalsSlice.actions
