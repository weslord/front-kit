import * as TD from '../types'

import { useEffect, useReducer, useRef } from 'react'
import { equals } from 'ramda'

import { store } from '../store/store'

export function useStore<T>(mapper: (state: TD.StoreState) => T) {
    const [, forceRender] = useReducer((s) => s + 1, 0)
    const initialState = mapper(store.getState())
    const mappedStateRef = useRef(initialState)

    useEffect(() => {
        function checkForUpdates() {
            const nextState = mapper(store.getState())
            if (!equals(nextState, mappedStateRef.current)) {
                mappedStateRef.current = nextState
                // @ts-ignore
                forceRender({})
            }
        }

        checkForUpdates()
        const unsubscribe = store.subscribe(checkForUpdates)

        return () => unsubscribe()
    }, [mapper])

    return mapper(store.getState())
}
