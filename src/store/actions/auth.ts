import * as TD from 'types/types'

import { saveAuthData } from 'sys/localStorage'

import { store } from 'store/store'
import { authActions } from 'store/slices/auth'

export const setToken = (token: TD.Auth['token']) => {
    store.dispatch(authActions.setToken(token))
    saveAuthData({ token })
}

export const logout = () => setToken(null)
