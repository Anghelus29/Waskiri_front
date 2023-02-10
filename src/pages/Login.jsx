import React from 'react'
import { useState } from 'react';
import '../styles/login.css';
import { useAuth } from '../auth/auth';

//import de imagenes
import logo from '../assets/logos/logo_waskiri.png';
import usuario from '../assets/icons/icon_user.svg';
import passw from '../assets/icons/icon_password.svg';
import { Navigate } from 'react-router-dom';

const Login = () => {

    const auth = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (eUser) => {
        eUser.preventDefault();
        auth.login({ email, password });
        //console.log({email, password });
    };

    if (auth.user) {
        return <Navigate to='/perfil' />
    }

    return (
        <div className="Login">
            <div className="Login-container">
                <img src={logo} alt="logo" className="logo" />

                <form className="form" onSubmit={login}>
                    {/* entrada de user */}
                    <label htmlFor="email" className="label">Correo Electronico</label>
                    <div className='container_input'>
                        <img src={usuario} alt="icon" className='icon' />
                        <input
                            type="text"
                            name='email'
                            placeholder="correo@example.cm"
                            className="input input-email"
                            value={email}
                            onChange={eUser => setEmail(eUser.target.value)}
                        />
                    </div>
                    {/* entrada de contraseña */}
                    <label htmlFor="password" className="label">Contraseña</label>
                    <div className='container_input' >
                        <img src={passw} alt="icon" className='icon' />
                        <input
                            type="password"
                            name='password'
                            placeholder="*********"
                            className="input input-password"
                            value={password}
                            onChange={eUser => setPassword(eUser.target.value)}
                        />
                    </div>

                    <button
                        className="primary-button login-button"
                        type='submit'
                    >
                        Iniciar Sesion
                    </button>
                    <a href="/">Olvidaste tu contraseña?</a>
                </form>

                {/* <button
                    className="secondary-button signup-button"
                >
                    Registrarse
                </button> */}
            </div>
        </div>
    );
}

export default Login;