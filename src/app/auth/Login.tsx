import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

import { request } from 'sys/request'

import { setToken } from 'store/auth/auth-actions'

import { Button } from 'elements/button/Button'
import { Input } from 'elements/input/Input'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const next = searchParams.get('next') ?? '/'

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        request({
            url: '/api/auth/login',
            method: 'POST',
            isAuthenticated: false,
            body: { email, password },
            success: (data) => {
                setToken(data.token)
                navigate(next)
            },
            failure: (res) => res.text().then((err) => setError(err)),
            error: (err) => setError(String(err)),
        })
    }

    return (
        <div className='Login'>
            <h2>Please log in.</h2>
            <form onSubmit={handleSubmit}>
                <label>email</label>
                <Input
                    name='email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>password</label>
                <Input
                    name='password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='error'>{error}</div>

                <Link className='Button forgot' to='/auth/forgot-password'>
                    forgot password
                </Link>

                <Button type='submit'>login</Button>
            </form>
        </div>
    )
}
