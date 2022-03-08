import * as TD from 'types/index'

import { useStore } from 'hooks/use-store'

import { ExampleModal } from './ExampleModal'

type MC = { [key in TD.ModalTypes]: () => JSX.Element }

const modalComponents: MC = {
    SOME_MODAL: ExampleModal,
    SOME_OTHER_MODAL: ExampleModal,
}

export const Modals = () => {
    let modals = useStore(({ modals }) => modals)
    const ModalComponents = modals.map((modal) => {
        const ModalComponent = modalComponents[modal]
        return <ModalComponent key={modal} />
    })
    return <>{ModalComponents}</>
}
