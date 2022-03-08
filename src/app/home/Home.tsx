import { store } from 'store/store'

import { Button } from 'elements/button/Button'
import { modalsActions } from 'store/slices/modals'

export const Home = () => {
    const openModal = () => {
        store.dispatch(modalsActions.open({ modalType: 'SOME_MODAL' }))
    }

    return (
        <div>
            <h1>Home</h1>
            <div>
                <Button onClick={openModal}>Open Modal</Button>
            </div>
        </div>
    )
}
