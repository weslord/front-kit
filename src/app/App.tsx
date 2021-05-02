import { Home } from './Home/Home'
import { Auth } from './Auth/Auth'

import { ErrorBoundary } from 'src/elements/error-boundary/ErrorBoundary'
// import { Notifications } from 'src/elements/notifications/Notifications'

import './App.scss'

function App() {
    return (
        <div className='App'>
            <ErrorBoundary>
                <Home />
                <Auth />
                {/* <Notifications /> */}
            </ErrorBoundary>
        </div>
    )
}

export default App
