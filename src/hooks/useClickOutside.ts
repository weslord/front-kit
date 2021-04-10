import { useEffect, useRef } from 'react'

export function useClickOutside(cb: () => void) {
    const ref = useRef<any>()

    useEffect(() => {
        const onClickOutside = (ev: Event) => {
            ref.current && !ref.current.contains(ev.target) && cb && cb()
        }

        document.addEventListener('mousedown', onClickOutside)
        document.addEventListener('touchstart', onClickOutside)

        return () => {
            document.removeEventListener('mousedown', onClickOutside)
            document.removeEventListener('touchstart', onClickOutside)
        }
    }, [ref, cb])

    return ref
}
