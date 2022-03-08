import { store } from 'store/store'

import { modalsActions } from 'store/modals/modals-slice'
import { notificationsActions } from 'store/notifications/notifications-slice'
import { logout } from 'store/auth/auth-actions'

import { Button } from 'elements/button/Button'

export const Home = () => {
    const openModal = () => {
        store.dispatch(modalsActions.open({ modalType: 'SOME_MODAL' }))
    }

    const createNotification = () => {
        store.dispatch(
            notificationsActions.addNotification({
                type: 'success',
                text: 'Here is your notification',
            })
        )
    }

    return (
        <div>
            <h1>Home</h1>
            <div>
                <Button onClick={openModal}>Open Modal</Button>
                <Button onClick={createNotification}>
                    Create Notification
                </Button>
                <Button onClick={logout}>Logout</Button>
            </div>
        </div>
    )
}
