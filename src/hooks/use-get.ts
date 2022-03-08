import * as API from 'types/api'

import { useEffect, useState } from 'react'

import { request } from 'sys/request'

export function useGet<T>({ url }: { url: string }): API.Result<T> {
    const [result, setResult] = useState<API.Result<T>>({
        status: 'LOADING',
    })

    useEffect(() => {
        request({
            url,
            success: (data) => {
                setResult({
                    status: 'READY',
                    response: data,
                })
            },
            error: (err) => {
                setResult({
                    status: 'ERROR',
                    error: err,
                })
            },
            failure: () => {
                setResult({
                    status: 'ERROR',
                })
            },
        })
    }, [url])

    return result
}
