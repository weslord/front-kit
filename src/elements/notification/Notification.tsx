import * as TD from 'types/types'

import { useEffect } from 'react'

import { store } from 'store/store'
import { notificationsActions } from 'store/notifications/notifications-slice'

import { Button } from 'elements/button/Button'

import './Notification.scss'

export const Notification = ({
    notification: { key, type, text },
}: {
    notification: TD.Notification
}) => {
    useEffect(() => {
        const tid = setTimeout(() => {
            store.dispatch(notificationsActions.removeNotification({ key }))
        }, 5000)
        return () => {
            clearTimeout(tid)
        }
    }, [key])

    const close = () => {
        store.dispatch(notificationsActions.removeNotification({ key }))
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
