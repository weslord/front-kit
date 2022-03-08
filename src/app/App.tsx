import { ErrorBoundary } from 'elements/error-boundary/ErrorBoundary'
import { Notifications } from 'elements/notifications/Notifications'

import { Home } from './Home/Home'
import { Auth } from './Auth/Auth'

import './App.scss'

export const App = () => {
    return (
        <div className='App'>
            <ErrorBoundary>
                <Home />
                <Auth />
                <Notifications />
            </ErrorBoundary>
        </div>
    )
}
