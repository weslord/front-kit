import * as TD from 'types/types'

import { createSlice } from '@reduxjs/toolkit'

import { loadAuthData } from 'sys/localStorage'

const authSlice = createSlice({
    name: 'auth',
    // NOTE: consider initializing to token: null,
    // safer for resets
    initialState: loadAuthData(),
    reducers: {
        setToken: (
            state,
            { payload: token }: { payload: TD.Auth['token'] }
        ) => {
            return {
                ...state,
                token,
            }
        },
    },
})

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions
