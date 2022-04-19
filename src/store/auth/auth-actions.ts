import * as TD from 'types/types'

import { saveAuthData } from 'sys/localStorage'

import { store } from 'store/store'
import { authActions } from './auth-slice'

export const setToken = (token: TD.Auth['token']) => {
    store.dispatch(authActions.setToken(token))
    saveAuthData({ token })
}

// NOTE: should clear all of store on logout!
// Be careful with order: store will initialize directly
// from localStorage, may need to:
// 1. clear auth in localstorage
// 2. dispatch complete store reset
// 3. dispatch auth.token = null
export const logout = () => setToken(null)
