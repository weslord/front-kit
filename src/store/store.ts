import * as TD from 'types'

import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { notificationsReducer } from './slices/notifications'
import { authReducer } from './slices/auth'

const appReducer = combineReducers({
    auth: authReducer,
    notifications: notificationsReducer,
})

export const store = configureStore({
    reducer: (state: TD.Store | undefined, action) => {
        return appReducer(state, action)
    },
})
