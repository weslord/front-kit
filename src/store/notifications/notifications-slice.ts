import * as TD from 'types/types'

import { createSlice } from '@reduxjs/toolkit'

let keyIndex = 0

const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: [] as TD.Notification[],
    reducers: {
        addNotification: (
            state,
            { payload }: { payload: Omit<TD.Notification, 'key'> }
        ) => {
            return [...state, { ...payload, key: keyIndex++ }]
        },
        removeNotification: (
            state,
            { payload: { key } }: { payload: { key: number } }
        ) => {
            return state.filter((notification) => notification.key !== key)
        },
    },
})

export const notificationsReducer = notificationsSlice.reducer
export const notificationsActions = notificationsSlice.actions
