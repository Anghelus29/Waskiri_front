import React from 'react'
import '../styles/asistencia.css';

//import de imagenes
import check from '../assets/icons/icon_checkbox.svg';

const Asistencia = () => {

    return (
        <>
            <div className='container-asistencia'>
                <h1>Lista de Asistencia</h1>
                <div className='header-asistencia'>
                    <p>Materia:</p>
                    <select name="materia" id="select-val"></select>
                    <p>Curso:</p>
                    <select name="materia" id="select-val"></select>
                    <p>Fecha:</p>
                    <input type="text" className='select-fech' />
                </div>
                <div className='lista-asistencia'>
                    <div className='student-asistencia'>
                        <p>Alfredo Ramos</p>
                        <img src={check} alt="check-list" className='icon' />
                    </div>
                    <div className='student-asistencia'>
                        <p>Wilder Rosas</p>
                        <img src={check} alt="check-list" className='icon' />
                    </div>
                    <div className='student-asistencia'>
                        <p>Alfredo Valverde</p>
                        <img src={check} alt="check-list" className='icon' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Asistencia;