import React from 'react';
import apiObject from '../api/querys';
import '../styles/horarios.css';

const apiHorario = '/horarios/search/1/1/2';

const Periods = ({ perd, dia }) => {
    const data = apiObject.useSchedule(apiHorario);
    const hours = data.Horarios;
    //console.log(hours);
    return (
        <div className='forPeriods'>
            {hours?.map((hour) => {
                if (hour.dia === dia && hour.periodo === perd) {
                    return <p className='matter'>{ hour.materia }</p>
                } else {
                    return null
                }
            })}
        </div>
    );
}

export default Periods;