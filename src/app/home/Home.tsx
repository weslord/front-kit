import { store } from 'store/store'

import { Button } from 'elements/button/Button'
import { modalsActions } from 'store/slices/modals'
import { notificationsActions } from 'store/slices/notifications'

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
            </div>
        </div>
    )
}
