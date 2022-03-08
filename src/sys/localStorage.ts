import * as TD from 'types/types'

export const loadAuthData = () => {
    try {
        const data = localStorage.getItem('authData')
        return !data ? { token: null } : (JSON.parse(data) as TD.Auth)
    } catch (err) {
        return { token: null }
    }
}

export const saveAuthData = (authData: TD.Auth) => {
    try {
        localStorage.setItem('authData', JSON.stringify(authData))
    } catch (err) {
        // noop
    }
}
