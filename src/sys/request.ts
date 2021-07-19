/* eslint-disable
    no-console,
    @typescript-eslint/no-explicit-any
*/

// import { store } from '../store/store';

// import { API_URL } from 'src/consts'

const API_URL = 'http://localhost:8000'

const failureNotification = (res: Response) => {
    res.json()
        .then((data) => {
            console.warn(data)
        })
        .catch((err) => {
            console.warn(res, err)
        })
}
const errorNotification = (err: any) => console.error(err)

export const request = ({
    url,
    method = 'GET',
    // isAuthenticated,
    body,
    success,
    failure,
    error,
}: {
    url: string
    method?: string
    // isAuthenticated?: boolean
    body?: any
    success: (data: any) => void
    failure?: (res: Response) => void
    error?: (err: any) => void
}) => {
    const headers = {
        // ...(isAuthenticated && { Authorization: 'Token ' + token }),
        'Content-Type': 'application/json',
    }

    const fullUrl = url.startsWith('/') ? `${API_URL}${url}` : url
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
                res.json()
                    .then((data) => {
                        success(data)
                    })
                    .catch((err) => {
                        if (error) error(err)
                        errorNotification(err)
                    })
            } else {
                if (failure) failure(res.clone())
                failureNotification(res)
            }
        })
        .catch((err) => {
            if (error) error(err)
            errorNotification(err)
        })
}
