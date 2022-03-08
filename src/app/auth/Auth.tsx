import { NavLink, Outlet } from 'react-router-dom'

import './Auth.scss'

export const WithAuthHeader = () => {
    return (
        <>
            <div className='AuthHeader'>
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
        </>
    )
}

export const Auth = () => {
    return (
        <div className='Auth'>
            <Outlet />
        </div>
    )
}
