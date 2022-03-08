import { useStore } from 'hooks/use-store'

import { Notification } from 'elements/notification/Notification'

import './Notifications.scss'

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
