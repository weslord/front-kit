export interface Notification {
    key: number
    type: 'warning' | 'info' | 'success'
    text: string
}

export interface Auth {
    token: string | null
}

export interface StoreState {
    auth: Auth
    notifications: Notification[]
}

export type Optional<T, K extends keyof T> = Omit<T, K> & Pick<Partial<T>, K>
