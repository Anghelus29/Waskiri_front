import React from 'react'
import '../styles/home.css';

//import de imagenes
import logo from '../assets/logos/logo_waskiri.png';
import { useAuth } from '../auth/auth';

const Home = () => {

    const auth = useAuth();

    const canModif = auth.user?.isAdmin;

    return (
        <>
            <div className='Home'>
                <h1>Blog General</h1>
                <img src={logo} alt="logo" className='home-logo' />
                {canModif && (<button>modificar</button>)}
            </div>
        </>
    );
}

export default Home;