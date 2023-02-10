import React from 'react';
import { useAuth } from '../auth/auth';
import '../styles/logout.css';

const Logout = () => {

    const auth = useAuth();

    const logout = (eUser) => {
        eUser.preventDefault();
        auth.logout();
    }


    return (
        <>
            <div className='Logout'>
                <h1>Log Out</h1>
                <form onSubmit={logout}>
                    <label>seguro q quieres salir?</label>
                    <button type='submit'>salir</button>
                </form>
            </div>
        </>
    );
}

export default Logout;