import React from 'react'
import '../styles/addDocent.css';

//import de imagenes
import cerrar from '../assets/icons/icon_close.svg';

const RegistrarDocente = () => {
    return (
        <div className="container-register">
            <a href="/" className="btn-cerrar"><img src={cerrar} className="icono" alt='iconDocent'/></a>
            <h3 className='label-title'>REGISTRO DE DOCENTES</h3>
            <form id="register-form">
                <h4 className='label-subtitle'>Datos del Docente</h4>
                <ul className="container-input">
                    <li>
                        C.I.
                        <input type="text" placeholder="Cedula de Identidad" required />
                    </li>
                    <li>Nombre<input type="text" placeholder="Nombre" required /></li>
                    <li>Apellido<input type="text" placeholder="Apellido" required /></li>
                    <li>Fecha de Nacimiento<input type="text" placeholder="Fecha de Nacimiento" required /></li>
                    <li>Direccion<input type="text" placeholder="Direcion" required /></li>
                    <li>Correo Electronico<input type="email" placeholder="Correo Electronico" /></li>
                    <li>Celular<input type="number" placeholder="Celular" required /></li>
                    <li>Materia<select required className='select-materia'></select></li>

                    <li>USUARIO<input type="text" placeholder="User" required /></li>
                    <li>CONTRASEÑA<input type="text" placeholder="Password" required /></li>

                    <button type="submit" className="primary-button register-button"> Registrar </button>
                </ul>
            </form>
        </div>
    );
}

export default RegistrarDocente;