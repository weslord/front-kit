import { store } from 'store/store'
import { modalsActions } from 'store/slices/modals'

import { Button } from 'elements/button/Button'

import './Modal.scss'

export const Modal = ({
    onClose,
    children,
}: {
    onClose?: any
    children: any
}) => {
    const close = () => {
        onClose && onClose()
        store.dispatch(modalsActions.close())
    }
    return (
        <div className='Modal' onClick={close}>
            <div className='modal-inner' onClick={(ev) => ev.stopPropagation()}>
                <Button className='close' onClick={close}>
                    x
                </Button>

                {children}
            </div>
        </div>
    )
}
