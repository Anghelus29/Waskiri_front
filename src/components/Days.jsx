import React from 'react';
import Periods from './Periods';
import apiObject from '../api/querys';
import '../styles/horarios.css';

const apiPeriods = '/periodos/list';

const Days = ({ day }) => {

    const data = apiObject.usePeriods(apiPeriods);
    const periods = data.periodos;
    //console.log(periods);
    return (
        <>
            <div className='forDays'>
                <div className='day'>{day}</div>
                {periods?.map((period) => {
                    return <Periods perd={period.name} dia={day} />
                })}
            </div>
        </>
    );
}

export default Days;