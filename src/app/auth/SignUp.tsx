import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { request } from 'sys/request'

import { setToken } from 'store/auth/auth-actions'

import { Button } from 'elements/button/Button'
import { Input } from 'elements/input/Input'

export const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        request({
            url: '/api/auth/signup',
            method: 'POST',
            isAuthenticated: false,
            body: { email, password },
            success: (data) => {
                setToken(data.token)
                navigate('/')
            },
            failure: (res) => res.text().then((err) => setError(err)),
            error: (err) => setError(String(err)),
        })
    }

    return (
        <div className='SignUp'>
            <h2>Please sign up.</h2>
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

                <Button type='submit'>sign up</Button>
            </form>
        </div>
    )
}
