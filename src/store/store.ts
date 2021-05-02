import * as TD from 'src/types'

import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { reducer as notificationsReducer } from './slices/notifications'

import { useStore } from 'src/hooks/useStore'
export { useStore }

const appReducer = combineReducers({
    // auth: authReducer,
    // requests: requestsReducer,
    notifications: notificationsReducer,
})

export const store = configureStore({
    reducer: (state: TD.StoreState | undefined, action) => {
        return appReducer(state, action)
    },
})
