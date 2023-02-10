import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/menuMobile.css';

//import de imagenes
import home from '../assets/icons/icon_home.svg';
import we from '../assets/icons/icon_we.svg';
import add from '../assets/icons/icon_add.svg';
import teacher from '../assets/icons/icon_teacher.svg';
import student from '../assets/icons/icon_student.svg';
import list from '../assets/icons/icon_list.svg';
import messag from '../assets/icons/icon_messag.svg';
import contact from '../assets/icons/icon_contact.svg';
import log_in from '../assets/icons/icon_arrow_enter.svg';
import log_out from '../assets/icons/icon_arrow_exit.svg';

const MenuMobil = () => {
    return (
        <div className="mobile-menu">
            <ul>
                <li className='cont_menu'>
                    <img src={home} alt="nosotros" className='icon' />
                    <NavLink to='/' className='nav_a'>Home</NavLink>
                </li>
                <li className='cont_menu'>
                    <img src={we} alt="nosotros" className='icon' />
                    <NavLink to='/nosotros' className='nav_a'>Nosotros</NavLink>
                </li>
                <li className='cont_menu'>
                    <img src={add} alt="agregar" className='icon' />
                    <NavLink className='nav_a' >Agregar</NavLink>
                </li>
                <li className='cont_menu'>
                    <img src={teacher} alt="plantel_docente" className='icon' />
                    <NavLink className='nav_a' >Docentes</NavLink>
                </li>
                <li className='cont_menu'>
                    <img src={student} alt="plantel_docente" className='icon' />
                    <NavLink className='nav_a' >Estudiantes</NavLink>
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
            </ul>
        </div>
    );
}

export default MenuMobil;