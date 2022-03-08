import { Notification } from 'types/index'

import { createSlice } from '@reduxjs/toolkit'

let keyIndex = 0

const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: [] as Notification[],
    reducers: {
        addNotification: (
            state,
            { payload }: { payload: Omit<Notification, 'key'> }
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

export const { actions, reducer } = notificationsSlice
