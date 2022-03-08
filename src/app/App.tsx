import { ErrorBoundary } from 'elements/error-boundary/ErrorBoundary'
import { Notifications } from 'elements/notifications/Notifications'

import { Home } from 'app/home/Home'
import { Auth } from 'app/auth/Auth'
import { Modals } from 'app/modals/Modals'

import './App.scss'

export const App = () => {
    return (
        <div className='App'>
            <ErrorBoundary>
                <Home />
                <Auth />
                <Modals />
                <Notifications />
            </ErrorBoundary>
        </div>
    )
}
