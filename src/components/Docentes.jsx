import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/docentes.css';

const PlantelDocente = () => {
    return (
        <div className="menu-docentes">
            <ul>
                <li>
                    <NavLink to="/listaDocentes" className='nav-b'>Lista de Docentes</NavLink>
                </li>

                <li>
                    <NavLink to="/horariosDocentes" className='nav-b'>Horarios</NavLink>
                </li>

                <li>
                    <NavLink to="/" className='nav-b'>Asignar Materias</NavLink>
                </li>

                <li>
                    <NavLink to="/" className='nav-b'>Comunicados</NavLink>
                </li>

                <li>
                    <NavLink to="/horarios" className='nav-b'>Test Horarios</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default PlantelDocente;