import { Home } from './pages/Home'

import { ErrorBoundary } from 'src/elements/error-boundary/ErrorBoundary'
import { Notifications } from 'src/elements/notifications/Notifications'

import './App.scss'

function App() {
    return (
        <div className='App'>
            <ErrorBoundary>
                <Home />
                <Notifications />
            </ErrorBoundary>
        </div>
    )
}

export default App
