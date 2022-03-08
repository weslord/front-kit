import { store } from 'store/store'

import { logout } from 'store/actions/auth'
import { notificationsActions } from 'store/slices/notifications'

const API_URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8000'
    : '___PRODUCTION_URL___'

const failureNotification = (res: Response) => {
    store.dispatch(
        notificationsActions.addNotification({
            type: 'warning',
            text: 'Something went wrong.',
        })
    )

    res.json()
        .then((data) => {
            console.warn(data)
        })
        .catch((err) => {
            console.warn(res, err)
        })
}

const errorNotification = (err: any) => {
    store.dispatch(
        notificationsActions.addNotification({
            type: 'warning',
            text: 'Something went wrong.',
        })
    )

    console.error(err)
}

export const request = <T>({
    url,
    method = 'GET',
    body,
    isAuthenticated = true,
    success,
    failure,
    error,
}: (
    | {
          method?: 'GET' | 'HEAD' | 'DELETE'
          body?: undefined
      }
    | {
          method: 'POST' | 'PUT'
          body: T
      }
    | {
          method: 'PATCH'
          body: Partial<T>
      }
) & {
    url: string
    isAuthenticated?: boolean
    success: (data: any) => void
    failure?: (res: Response) => void
    error?: (err: any) => void
}) => {
    const token = store.getState().auth.token

    const headers = {
        ...(isAuthenticated && token && { Authorization: 'Token ' + token }),
        'Content-Type': 'application/json',
    }

    const isUsingOwnApi = url.startsWith('/')
    const fullUrl = isUsingOwnApi ? `${API_URL}${url}` : url
    if (!fullUrl.startsWith('http')) {
        console.warn(`URL does not start with http: "${url}"`)
    }

    fetch(fullUrl, {
        method,
        headers,
        ...(body && { body: JSON.stringify(body) }),
    })
        .then((res) => {
            if (res.ok) {
                if (res.statusText === 'No Content') {
                    success('')
                } else {
                    res.json()
                        .then((data) => {
                            success(data)
                        })
                        .catch((err) => {
                            if (error) error(err)
                            errorNotification(err)
                        })
                }
            } else {
                // received error from server
                if (isUsingOwnApi && res.status === 401) {
                    // unauthenticated
                    // TODO: prompt to login, instead?
                    logout()
                }

                // TODO: definitely supply better error message
                if (failure) failure(res.clone())
                failureNotification(res)
            }
        })
        .catch((err) => {
            // network connection issue
            if (error) error(err)
            errorNotification(err)
        })
}
