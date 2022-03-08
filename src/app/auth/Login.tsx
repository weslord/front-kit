import React, { useState } from 'react'

import { request } from 'sys/request'

import { setToken } from 'store/actions/auth'

import { Button } from 'elements/button/Button'
import { Input } from 'elements/input/Input'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        request({
            url: '/api/auth/login',
            method: 'POST',
            body: { email, password },
            success: (data) => setToken(data.token),
            failure: (res) => res.text().then((err) => setError(err)),
            error: (err) => setError(err),
        })
    }

    return (
        <div className='Login'>
            <h2>Please log in.</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    name='email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    name='password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='error'>{error}</div>

                <Button type='submit'>login</Button>
            </form>
        </div>
    )
}
