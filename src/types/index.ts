export interface Notification {
    key: number
    type: 'warning' | 'info' | 'success'
    text: string
}

export interface Auth {
    token: string | null
}

// export type ModalTypes = 'SOME_MODAL' | 'SOME_OTHER_MODAL'

export interface Store {
    auth: Auth
    // modals: ModalTypes[]
    notifications: Notification[]
}

export type Optional<T, K extends keyof T> = Omit<T, K> & Pick<Partial<T>, K>
