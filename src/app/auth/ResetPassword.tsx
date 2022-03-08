import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { request } from 'sys/request'

import { store } from 'store/store'
import { notificationsActions } from 'store/notifications/notifications-slice'

import { Button } from 'elements/button/Button'
import { Input } from 'elements/input/Input'

export const ResetPassword = () => {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { token, userId } = useParams()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        request({
            url: '/api/auth/reset-password',
            method: 'POST',
            isAuthenticated: false,
            body: {
                token,
                user_id: userId,
                password,
            },
            success: () => {
                window.location.pathname = ''
                store.dispatch(
                    notificationsActions.addNotification({
                        type: 'success',
                        text: 'Your password has been reset.',
                    })
                )
            },
            failure: (res) => res.text().then((err) => setError(err)),
            error: (err) => setError(String(err)),
        })
    }

    return (
        <div className='ResetPassword'>
            <h2>Please enter your new password</h2>
            <form onSubmit={handleSubmit}>
                <label>password</label>
                <Input
                    name='password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='error'>{error}</div>

                <Button type='submit'>submit</Button>
            </form>
        </div>
    )
}
