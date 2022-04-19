import * as TD from 'types/types'

import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { notificationsReducer } from './notifications/notifications-slice'
import { authReducer } from './auth/auth-slice'
import { modalsReducer } from './modals/modals-slice'

const appReducer = combineReducers({
    auth: authReducer,
    modals: modalsReducer,
    notifications: notificationsReducer,
})

const rootReducer: typeof appReducer = (state, action) => {
    if (action.type === 'CLEAR_ALL') {
        return appReducer(undefined, action)
    }

    return appReducer(state, action)
}
export const store = configureStore({
    reducer: (state: TD.Store | undefined, action) => {
        return rootReducer(state, action)
    },
})
