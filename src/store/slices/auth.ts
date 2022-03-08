import * as TD from 'types'

import { createSlice } from '@reduxjs/toolkit'

import { loadAuthData } from 'sys/localStorage'

export const authSlice = createSlice({
    name: 'auth',
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
