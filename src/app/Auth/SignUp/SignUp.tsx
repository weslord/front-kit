import React, { useState } from 'react';

import { request } from 'src/sys/request';

import { setToken } from 'src/store/actions/auth';

import { Button } from 'src/elements/button/Button';
import { Input } from 'src/elements/input/Input';

import './SignUp.scss';

export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        request({
            url: '/api/auth/signup',
            method: 'POST',
            body: { email, password },
            success: (data) => setToken(data.token),
            failure: (res) => res.text().then(err => setError(err)),
            error: (err) => setError(err),
        });
    };

    return (
        <div className='SignUp'>
            <h2>Please sign up.</h2>
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

                <Button type='submit'>sign up</Button>
            </form>
        </div>
    );
};
