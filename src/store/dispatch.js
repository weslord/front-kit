import { store } from './store'

import { notificationsActions } from './notifications/notifications-slice'
import { authActions } from './auth/auth-slice'
import { modalsActions } from './modals/modals-slice'

const dispatcher = {}

const populateWith = (actions) =>
    Object.entries(actions).map(([name, action]) => {
        dispatcher[name] = (args) => store.dispatch(action(args))
    })

populateWith(authActions)
populateWith(notificationsActions)
populateWith(modalsActions)

console.log(dispatcher)
