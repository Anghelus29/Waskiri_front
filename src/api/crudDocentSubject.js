import { useEffect, useState } from 'react'
import api from './axios';

const postMatDocent=async(apiDatos, dato1, dato2, dato3)=>{
  const response = await api.post(apiDatos+'/'+dato1+'/'+dato2+'/'+dato3+'/guardar');
  return(response.data);
}

const useDocenteMateria = (apiDocenteMateria) => {

    const [docenteMateria, setDocenteMateria] = useState([]);
  
    useEffect(() => {
        const getDocente = async () => {
            const response = await api.get(apiDocenteMateria);
            setDocenteMateria(response.data);
        };
        getDocente();
    }, [apiDocenteMateria]);
    return docenteMateria;
  };

  const useDocentesHabilitados = (apiDocentesHabilitados) => {
  const [docentesHabilitados, setDocentesHabilitados] = useState([]);
  
  useEffect(() => {
      const getDocentesHabilitados = async () => {
          const response = await api.get(apiDocentesHabilitados);
          setDocentesHabilitados(response.data);
      };
      getDocentesHabilitados();
  }, [apiDocentesHabilitados]);
  return docentesHabilitados;
};

const useMateria = (apiMateria) => {

  const [materia, setMateria] = useState([]);

  useEffect(() => {
      const getMateria = async () => {
          const response = await api.get(apiMateria);
          setMateria(response.data);
      };
      getMateria();
  }, [apiMateria]);
  return materia;
};

const useNivel = (apiNivel) => {

  const [nivel, setNivel] = useState([]);

  useEffect(() => {
      const getNivel = async () => {
          const response = await api.get(apiNivel);
          setNivel(response.data);
      };
      getNivel();
  }, [apiNivel]);
  return nivel;
};

  const apiObject = {
    useDocenteMateria,
    useDocentesHabilitados,
    useMateria,
    useNivel,
    postMatDocent

  }
  
  export default apiObject;