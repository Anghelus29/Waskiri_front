import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/agregar.css';

const Agregar = () => {
    return (
        <div className="menu-agregar">
            <ul>
                <li>
                    <NavLink to="/registrarDocente" className='nav-b'>Nuevo Docente</NavLink>
                </li>

                <li>
                    <NavLink to="/registrarEstudiante" className='nav-b'>Nuevo Estudiante</NavLink>
                </li>

                <li>
                    <NavLink to="/registrarCurso" className='nav-b'>Nuevo Curso</NavLink>
                </li>

                <li>
                    <NavLink to="/" className='nav-b'>Nuevo Periodo</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Agregar;
