import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

//import de imagenes
import menu from '../assets/icons/icon_menu.svg';
import logo from '../assets/logos/logo_waskiri.png';
import home from '../assets/icons/icon_home.svg';
import we from '../assets/icons/icon_we.svg';
import add from '../assets/icons/icon_add.svg';
import teacher from '../assets/icons/icon_teacher.svg';
import student from '../assets/icons/icon_student.svg';
import list from '../assets/icons/icon_list.svg';
import messag from '../assets/icons/icon_messag.svg';
import log_in from '../assets/icons/icon_arrow_enter.svg';
import log_out from '../assets/icons/icon_arrow_exit.svg';
import perfil from '../assets/icons/icon_teacher.svg';

//import de toggles
import PlantelDocente from './Docentes';
import Agregar from './Agregar';
import PlantelEstudiantil from './Estudiantes';
import MenuMobil from './MenuMobil';
import { useAuth } from '../auth/auth';

const Header = () => {

    //hook para autentificar usuario
    const auth = useAuth();

    const canModifD = auth.user?.isAdmin && auth.user?.isAdmin === 2;
    const canModifP = auth.user?.isAdmin && auth.user?.isAdmin === 3;

    //toggles para componentes
    const [toggleM, setToggleM] = useState(false);
    const handleToggleM = () => {
        setToggleM(!toggleM);
        if (toggleA) {
            setToggleA(!toggleA);
        };
        if (toggleD) {
            setToggleD(!toggleD);
        };
        if (toggleE) {
            setToggleE(!toggleE);
        };
    }
    const [toggleA, setToggleA] = useState(false);
    const handleToggleA = () => {
        setToggleA(!toggleA);
        if (toggleD) {
            setToggleD(!toggleD);
        };
        if (toggleE) {
            setToggleE(!toggleE);
        };
    }
    const [toggleD, setToggleD] = useState(false);
    const handleToggleD = () => {
        setToggleD(!toggleD);
        if (toggleA) {
            setToggleA(!toggleA);
        };
        if (toggleE) {
            setToggleE(!toggleE);
        };
    }
    const [toggleE, setToggleE] = useState(false);
    const handleToggleE = () => {
        setToggleE(!toggleE);
        if (toggleA) {
            setToggleA(!toggleA);
        };
        if (toggleD) {
            setToggleD(!toggleD);
        };
    }
    const [toggleX, setToggleX] = useState(false);
    const handleToggleX = () => {
        setToggleX(!toggleX);
        if (toggleA) {
            setToggleA(!toggleA);
        };
        if (toggleD) {
            setToggleD(!toggleD);
        };
        if (toggleE) {
            setToggleE(!toggleE);
        };
    }

    //push de rutas
    const routes = [];
    routes.push({
        id: 1,
        clasLi: 'cont_menu',
        im: home,
        alt: 'home',
        clasImg: 'icon',
        to: '/',
        clasNav: 'nav_a',
        text: 'Home',
        click: handleToggleX,
        private: false,
        d_vip: true,
        p_vip: true,
    });
    routes.push({
        id: 2,
        clasLi: 'cont_menu',
        im: we,
        alt: 'nosotros',
        clasImg: 'icon',
        to: '/nosotros',
        clasNav: 'nav_a',
        text: 'Nosotros',
        click: handleToggleX,
        private: false,
    });
    routes.push({
        id: 3,
        clasLi: 'cont_menu',
        im: add,
        alt: 'agregar',
        clasImg: 'icon',
        clasNav: 'nav_a',
        text: 'Agregar',
        click: handleToggleA,
        private: true,
        d_vip: true,
    });
    routes.push({
        id: 4,
        clasLi: 'cont_menu',
        im: teacher,
        alt: 'plantel_docente',
        clasImg: 'icon',
        clasNav: 'nav_a',
        text: 'Docentes',
        click: handleToggleD,
        private: true,
        d_vip: true,
    });
    routes.push({
        id: 5,
        clasLi: 'cont_menu',
        im: student,
        alt: 'plantel_estudiantil',
        clasImg: 'icon',
        clasNav: 'nav_a',
        text: 'Estudiantes',
        click: handleToggleE,
        private: true,
        d_vip: true,
    });
    routes.push({
        id: 6,
        clasLi: 'cont_menu',
        im: list,
        alt: 'asistencia',
        clasImg: 'icon',
        to: '/asistencia',
        clasNav: 'nav_a',
        text: 'Asistencia',
        click: handleToggleX,
        private: true,
        p_vip: true,
    });
    routes.push({
        id: 7,
        clasLi: 'cont_menu',
        im: messag,
        alt: 'comunicados',
        clasImg: 'icon',
        to: '/comunicados',
        clasNav: 'nav_a',
        text: 'Comunicados',
        click: handleToggleX,
        private: true,
        p_vip: true,
    });
    routes.push({
        id: 9,
        clasLi: 'cont_menu',
        im: log_in,
        alt: 'login',
        clasImg: 'icon',
        to: '/login',
        clasNav: 'nav_a',
        text: 'Login',
        click: handleToggleX,
        private: false,
    });
    routes.push({
        id: 10,
        clasLi: 'cont_menu',
        im: log_out,
        alt: 'logout',
        clasImg: 'icon',
        to: '/logout',
        clasNav: 'nav_a',
        text: 'Logout',
        click: handleToggleX,
        private: true,
        d_vip: true,
        p_vip: true,
    });

    return (
        <nav>
            <div className='menu-mobile'>
                <ul>
                    <li className='menu-movil' onClick={handleToggleM}>
                        <img src={menu} alt="menu" className="menu" />
                    </li>
                </ul>
            </div>

            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />

                <ul>
                    {routes.map(route => {

                        if (route.text === 'Login' && auth.user) return null;
                        if (route.private && !auth.user) return null;

                        if (canModifD && !route.d_vip) return null;
                        if (canModifP && !route.p_vip) return null;

                        return (
                            <li key={route.id} className={route.clasLi}>
                                <img src={route.im} alt={route.alt} className={route.clasImg} />
                                <NavLink
                                    to={route.to}
                                    className={route.clasNav}
                                    onClick={route.click}
                                >
                                    {route.text}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>

                {/* <ul>
                    <li className='cont_menu'>
                        <img src={home} alt="home" className='icon' />
                        <NavLink to='/home' className='nav_a'>Home</NavLink>
                    </li>
                    <li className='cont_menu'>
                        <img src={we} alt="nosotros" className='icon' />
                        <NavLink to='/nosotros' className='nav_a'>Nosotros</NavLink>
                    </li>
                    <li className='cont_menu'>
                        <img src={add} alt="agregar" className='icon' />
                        <NavLink className='nav_a' onClick={handleToggleA}>Agregar</NavLink>
                    </li>
                    <li className='cont_menu'>
                        <img src={teacher} alt="plantel_docente" className='icon' />
                        <NavLink className='nav_a' onClick={handleToggleD}>Docentes</NavLink>
                    </li>
                    <li className='cont_menu'>
                        <img src={student} alt="plantel_docente" className='icon' />
                        <NavLink className='nav_a' onClick={handleToggleE}>Estudiantes</NavLink>
                    </li>
                    <li className='cont_menu'>
                        <img src={list} alt="asistencia" className='icon' />
                        <NavLink to='/asistencia' className='nav_a'>Asistencia</NavLink>
                    </li>
                    <li className='cont_menu'>
                        <img src={messag} alt="comunicados" className='icon' />
                        <NavLink to='/comunicados' className='nav_a'>Comunicados</NavLink>
                    </li>
                    <li className='cont_menu'>
                        <img src={contact} alt="contacto" className='icon' />
                        <NavLink to='/contacto' className='nav_a'>Contacto</NavLink>
                    </li>
                    <li className='cont_menu'>
                        <img src={log_in} alt="iniciar_sesion" className='icon' />
                        <NavLink to='/login' className='nav_a'>Iniciar Sesion</NavLink>
                    </li>
                    <li className='cont_menu'>
                        <img src={log_out} alt="cerrar_sesion" className='icon' />
                        <NavLink to='/logout' className='nav_a'>Cerrar Sesion</NavLink>
                    </li>
                </ul> */}

            </div>

            <div className="navbar-right">
                <ul>
                    <li
                        className="navbar-email"
                    >
                        
                        {/* {auth.user?.email} */}
                    </li>
                    <li
                        className="usuario"
                    >
                        <img src={perfil} alt="perfil" className='icon'/>
                        <NavLink to='/perfil' className='nav_a'>Perfil</NavLink>
                    </li>
                </ul>
            </div>
            {toggleA && <Agregar />}
            {toggleD && <PlantelDocente />}
            {toggleE && <PlantelEstudiantil />}
            {toggleM && <MenuMobil />}
        </nav>
        
    );
}

export default Header;