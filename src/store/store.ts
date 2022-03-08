import * as TD from 'types'

import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { reducer as notificationsReducer } from './slices/notifications'
import { authSlice } from './slices/auth'

const appReducer = combineReducers({
    auth: authSlice.reducer,
    // requests: requestsReducer,
    notifications: notificationsReducer,
})

export const store = configureStore({
    reducer: (state: TD.Store | undefined, action) => {
        return appReducer(state, action)
    },
})
