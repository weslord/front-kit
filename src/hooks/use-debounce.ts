import { useState } from 'react'

const DEBOUNCE_DELAY = 1000

export const useDebounce = () => {
    const [timeoutId, setTimeoutId] = useState(undefined as undefined | number)

    const cancelDebounce = () => {
        clearTimeout(timeoutId)
        setTimeoutId(undefined)
    }

    const debounce = (onTimeout: () => void) => {
        if (timeoutId) {
            cancelDebounce()
        }

        const newTimeoutId = window.setTimeout(() => {
            cancelDebounce()
            onTimeout()
        }, DEBOUNCE_DELAY)

        setTimeoutId(newTimeoutId)
    }

    const debouncePending = timeoutId !== undefined

    return {
        debounce,
        debouncePending,
        cancelDebounce,
    }
}
