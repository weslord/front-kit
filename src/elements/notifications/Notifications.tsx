import * as TD from 'types'

import { useEffect } from 'react'

import { useStore } from 'hooks/use-store'
import { actions as notificationActions } from 'store/slices/notifications'

import { Button } from 'elements/button/Button'

import './Notifications.scss'

const Notification = ({
    notification: { key, type, text },
}: {
    notification: TD.Notification
}) => {
    useEffect(() => {
        const tid = setTimeout(() => {
            notificationActions.removeNotification({ key })
        }, 5000)
        return () => {
            clearTimeout(tid)
        }
    }, [key])

    const close = () => {
        notificationActions.removeNotification({ key })
    }

    return (
        <div className={`Notification ${type}`}>
            <div className='text'>{text}</div>
            <Button className='close' onClick={close}>
                X
            </Button>
        </div>
    )
}

export const Notifications = () => {
    const notifications = useStore((state) => state.notifications)
    return (
        <div className='Notifications'>
            {notifications.map((notification) => (
                <Notification
                    key={notification.key}
                    notification={notification}
                />
            ))}
        </div>
    )
}
