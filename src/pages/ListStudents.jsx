import React from 'react'
import '../styles/listStudents.css';

//import de imagenes
import lupa from '../assets/icons/icon_search.svg';
import add from '../assets/icons/icon_add.svg';

const ListaEstudiantes = () => {
    return (
        <div className="container-d">
            <div className="accion list-students">
                <li>Curso:</li><select></select>
                <li> <input type="text" placeholder="Escriba nombre del estudiante" /> </li>
                <li> <a href="/"><img src={lupa} className="icon-d" alt='iconLupa' /></a></li>
                <li> <a href="/"><img src={add} className="icon-d" alt='iconAdd' /></a></li>
            </div>
            <div className="lista">
                <p>visualizacion para lista de estudiantes</p>
            </div>
        </div>
    );
}

export default ListaEstudiantes;