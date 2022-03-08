import { store } from './store'

import { notificationsActions } from './notifications/notifications-slice'
import { authActions } from './auth/auth-slice'
import { modalsActions } from './modals/modals-slice'

type Actions =
    | typeof modalsActions
    | typeof authActions
    | typeof notificationsActions

type KeyedDispatcher = {
    [K in keyof Actions]: (args: Parameters<Actions[K]>) => void
}

const dispatcher: KeyedDispatcher = {}

const populateWith = (actions: Actions) =>
    Object.entries(actions).map(
        ([name, action]: [name: string, action: any]) => {
            dispatcher[name] = (args) => store.dispatch(action(args))
        }
    )

populateWith(authActions)
populateWith(notificationsActions)
populateWith(modalsActions)

console.log(dispatcher)
