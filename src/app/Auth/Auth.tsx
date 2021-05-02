import { useState } from 'react';

import { useStore } from 'src/hooks/useStore';

import { setToken } from 'src/store/actions/auth';

import { Button } from 'src/elements/button/Button';

import { Login } from './Login/Login';
import { SignUp } from './SignUp/SignUp';

import './Auth.scss';

const Logout = () => {
    const logout = () => setToken(null);

    return <Button className='Logout primary' onClick={logout}>Logout</Button>;
};

export const Auth = () => {
    const isAuthed = useStore(state => state.auth.token !== null);

    const [tab, setTab] = useState<'LOGIN' | 'SIGNUP'>('LOGIN');

    return (
        <div className='Auth'>
            {isAuthed
                ? (
                    <>
                        <Logout />
                    </>
                )
                : (
                    <>
                        <Button onClick={() => { setTab('LOGIN'); }}>log in</Button>
                        {' / '}
                        <Button onClick={() => { setTab('SIGNUP'); }}>sign up</Button>
                        {tab === 'LOGIN' && <Login />}
                        {tab === 'SIGNUP' && <SignUp />}
                    </>
                )}
        </div>

    );
};
