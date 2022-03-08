import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { request } from 'sys/request'

import { store } from 'store/store'
import { notificationsActions } from 'store/slices/notifications'

import { Button } from 'elements/button/Button'
import { Input } from 'elements/input/Input'

export const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        request({
            url: '/api/auth/forgot-password',
            method: 'POST',
            isAuthenticated: false,
            body: { email },
            success: () => {
                navigate('/auth/login')
                store.dispatch(
                    notificationsActions.addNotification({
                        type: 'success',
                        text: 'Check your email for a password reset link.',
                    })
                )
            },
            failure: (res) => res.text().then((err) => setError(err)),
            error: (err) => setError(String(err)),
        })
    }

    return (
        <div className='ForgotPassword'>
            <h2>Enter the email to send a password reset link</h2>
            <form onSubmit={handleSubmit}>
                <label>email</label>
                <Input
                    name='email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className='error'>{error}</div>

                <Button type='submit'>submit</Button>
            </form>
        </div>
    )
}
