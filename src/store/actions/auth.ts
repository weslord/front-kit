import { store } from 'store/store'
import { authActions } from 'store/slices/auth'

import { saveAuthData } from 'sys/localStorage'

import * as TD from 'types'

export const setToken = (token: TD.Auth['token']) => {
    store.dispatch(authActions.setToken(token))
    saveAuthData({ token })
}

export const logout = () => setToken(null)
