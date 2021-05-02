import * as TD from 'src/types'

import { createSlice } from '@reduxjs/toolkit'

import { loadAuthData } from 'src/sys/localStorage'

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
