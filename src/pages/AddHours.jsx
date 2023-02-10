import React from 'react';
import '../styles/addHours.css';


const HorariosDocentes = () => {
    return (
        <div className="container-h">
            <div className="accion-h">
                <h3 className='title-h'>ASIGNAR MATERIA</h3>
                <li>Turno:</li><select className='select-h'></select>
                <li>Curso:</li><select className='select-h'></select>
                <li>Materia:</li><select className='select-h'></select>
                <li>Docente:</li><select className='select-h'></select>
                <li>Día:</li><select className='select-h'></select>
                <li>Periodo:</li><select className='select-h'></select>
                <div>
                    <button className='primary-button regis-button'>REGISTRAR</button>
                    <button className='secondary-button modif-button'>MODIFICAR</button>
                </div>
            </div>
            <div className="horario-h">
                <h3 className='title-h'>HORARIO</h3>
                <ol>
                    <div className="column-h">
                        <div className='header-h'>PERIODO</div>
                        <div className='materia-h'>1</div>
                        <div className='materia-h'>2</div>
                        <div className='materia-h'>3</div>
                        <div className='materia-h'>4</div>
                    </div>
                    <div className="column-h">
                        <div className='header-h'>LUNES</div>
                        <div className='materia-h'>2</div>
                        <div className='materia-h'>2</div>
                        <div className='materia-h'>2</div>
                        <div className='materia-h'>2</div>
                    </div>
                    <div className="column-h">
                        <div className='header-h'>MARTES</div>
                        <div className='materia-h'>3</div>
                        <div className='materia-h'>3</div>
                        <div className='materia-h'>3</div>
                        <div className='materia-h'>3</div>
                    </div>
                    <div className="column-h">
                        <div className='header-h'>MIERCOLES</div>
                        <div className='materia-h'>4</div>
                        <div className='materia-h'>4</div>
                        <div className='materia-h'>4</div>
                        <div className='materia-h'>4</div>
                    </div>
                    <div className="column-h">
                        <div className='header-h'>JUEVEZ</div>
                        <div className='materia-h'>5</div>
                        <div className='materia-h'>5</div>
                        <div className='materia-h'>5</div>
                        <div className='materia-h'>5</div>
                    </div>
                    <div className="column-h">
                        <div className='header-h'>VIERNES</div>
                        <div className='materia-h'>6</div>
                        <div className='materia-h'>6</div>
                        <div className='materia-h'>6</div>
                        <div className='materia-h'>6</div>
                    </div>
                    <div className="column-h">
                        <div className='header-h'>SABADO</div>
                        <div className='materia-h'>7</div>
                        <div className='materia-h'>7</div>
                        <div className='materia-h'>7</div>
                        <div className='materia-h'>7</div>
                    </div>
                </ol>
            </div>
        </div>
    );
}

export default HorariosDocentes;