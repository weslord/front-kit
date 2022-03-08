import {
    BrowserRouter,
    Navigate,
    Outlet,
    Route,
    Routes,
    useLocation,
} from 'react-router-dom'

import { useStore } from 'hooks/use-store'

import { ErrorBoundary } from 'elements/error-boundary/ErrorBoundary'
import { Notifications } from 'elements/notifications/Notifications'

import { NotFound } from 'elements/not-found/NotFound'

import { AuthRoutes } from './auth/Auth'

import { Home } from 'app/home/Home'
import { Modals } from 'app/modals/Modals'

import './App.scss'

const TokenCheck = () => {
    const { token } = useStore(({ auth }) => ({ token: auth.token }))
    const location = useLocation()
    const next = location.pathname !== '/' && `next=${location.pathname}`

    if (token === null)
        return (
            <Navigate
                to={{
                    pathname: '/auth/login',
                    ...(next && { search: next }),
                }}
            />
        )

    return <Outlet />
}

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<TokenCheck />}>
                {/* authorized routes */}
                <Route index element={<Home />} />
            </Route>

            <Route path='/auth/*' element={<AuthRoutes />} />

            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export const App = () => {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <AppRoutes />
                <Modals />
                <Notifications />
            </BrowserRouter>
        </ErrorBoundary>
    )
}
