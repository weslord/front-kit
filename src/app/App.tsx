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

import { Auth, WithAuthHeader } from './auth/Auth'
import { Login } from './auth/Login'
import { SignUp } from './auth/SignUp'
import { ForgotPassword } from './auth/ForgotPassword'
import { ResetPassword } from './auth/ResetPassword'

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

export const App = () => {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<TokenCheck />}>
                        {/* authorized routes */}
                        <Route index element={<Home />} />
                    </Route>

                    <Route path='/auth' element={<Auth />}>
                        <Route index element={<NotFound />} />
                        <Route element={<WithAuthHeader />}>
                            <Route path='login' element={<Login />} />
                            <Route path='sign-up' element={<SignUp />} />
                            <Route
                                path='forgot-password'
                                element={<ForgotPassword />}
                            />
                        </Route>
                        <Route
                            path='reset-password/:token/:userId'
                            element={<ResetPassword />}
                        />
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Modals />
                <Notifications />
            </BrowserRouter>
        </ErrorBoundary>
    )
}
