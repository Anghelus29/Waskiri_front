import React from 'react';
import Days from '../components/Days';
import apiObject from '../api/querys';
import '../styles/horarios.css';

const apiDays = '/dias/list';

const testHorarios = () => {
    const data = apiObject.useDays(apiDays);
    const dias = data.dias;
    //console.log(dias);
    return (
        <>
            <div className='containerHorarios'>
                {dias?.map((dia) => {
                    return <Days day={dia.name} />;
                })}
            </div>
        </>
    );
}

export default testHorarios;