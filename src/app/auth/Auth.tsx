import { NavLink, Outlet, Route, Routes } from 'react-router-dom'

import { NotFound } from 'elements/not-found/NotFound'

import { Login } from './Login'
import { SignUp } from './SignUp'
import { ForgotPassword } from './ForgotPassword'
import { ResetPassword } from './ResetPassword'

import './Auth.scss'

const Auth = () => {
    return (
        <div className='Auth'>
            <div className='auth-header'>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'Button active' : 'Button'
                    }
                    to='/auth/login'
                >
                    log in
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'Button active' : 'Button'
                    }
                    to='/auth/sign-up'
                >
                    sign up
                </NavLink>
            </div>

            <Outlet />
        </div>
    )
}

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route element={<Auth />}>
                <Route path='login' element={<Login />} />
                <Route path='sign-up' element={<SignUp />} />
                <Route path='forgot-password' element={<ForgotPassword />} />
            </Route>
            <Route
                path='reset-password/:token/:userId'
                element={<ResetPassword />}
            />

            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}
