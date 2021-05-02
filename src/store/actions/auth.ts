import { store } from 'src/store/store'
import { authSlice } from 'src/store/slices/auth'

import { saveAuthData } from 'src/sys/localStorage'

import * as TD from 'src/types'

export const setToken = (token: TD.Auth['token']) => {
    store.dispatch(authSlice.actions.setToken(token))
    saveAuthData({ token })
}
