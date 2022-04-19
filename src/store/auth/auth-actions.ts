import * as TD from 'types/types'

import { saveAuthData } from 'sys/localStorage'

import { store } from 'store/store'
import { authActions } from './auth-slice'

export const setToken = (token: TD.Auth['token']) => {
    store.dispatch(authActions.setToken(token))
    saveAuthData({ token })
}

export const logout = () => {
    saveAuthData({ token: null })
    store.dispatch({ type: 'CLEAR_ALL' })
}
