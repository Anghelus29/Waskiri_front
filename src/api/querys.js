import { useEffect, useState } from 'react'
import api from './axios';

const useSchedule = (apiHorario) => {
    const [hours, setHours] = useState([]);

    useEffect(() => {
        const getHours = async () => {
            const response = await api.get(apiHorario);
            setHours(response.data);
        };
        getHours();
    }, [apiHorario]);
    return hours;
};

const useDays = (apiDays) => {
    const [days, setDays] = useState([]);

    useEffect(() => {
        const getDays = async () => {
            const response = await api.get(apiDays);
            setDays(response.data);
        };
        getDays();
    }, [apiDays]);
    return days;
};

const usePeriods = (apiPeriods) => {
    const [periods, setPeriods] = useState([]);

    useEffect(() => {
        const getPeriods = async () => {
            const response = await api.get(apiPeriods);
            setPeriods(response.data);
        };
        getPeriods();
    }, [apiPeriods]);
    return periods;
};

const apiObject = {
    useSchedule,
    useDays,
    usePeriods
}

export default apiObject;