import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/estudiantes.css';

const PlantelEstudiantil = () => {
    return (
        <div className="menu-estudiantil">
            <ul>
                <li>
                    <NavLink to="/listaEstudiantes" className='nav-b'>Lista de Estudiantes</NavLink>
                </li>

                <li>
                    <NavLink to="/observacion" className='nav-b'>Observacion</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default PlantelEstudiantil;