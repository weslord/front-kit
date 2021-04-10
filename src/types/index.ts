export interface Notification {
    key: number
    type: 'warning' | 'info' | 'success'
    text: string
}

export interface StoreState {
    notifications: Notification[]
}

export type Optional<T, K extends keyof T> = Omit<T, K> & Pick<Partial<T>, K>
