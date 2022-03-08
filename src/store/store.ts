import * as TD from 'types/types'

import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { notificationsReducer } from './slices/notifications'
import { authReducer } from './slices/auth'
import { modalsReducer } from './slices/modals'

const appReducer = combineReducers({
    auth: authReducer,
    modals: modalsReducer,
    notifications: notificationsReducer,
})

export const store = configureStore({
    reducer: (state: TD.Store | undefined, action) => {
        return appReducer(state, action)
    },
})
