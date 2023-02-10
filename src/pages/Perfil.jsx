import React from 'react'
import { useAuth } from '../auth/auth';
import '../styles/perfil.css';

const Perfil = () => {
    const auth = useAuth();
    return (
        <>
            <div className='Perfil'>
                <h1>aca va el perfil</h1>
                <p>welcome {auth.user.username}</p>
            </div>
        </>
    );
}

export default Perfil;