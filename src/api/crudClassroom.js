import { useEffect, useState } from 'react'
import api from './axios';

 const postCurso=async(apiDatos, datos)=>{
    const response = await api.post(apiDatos, datos);
    return(response.data.curso_id);
  }
  const postParalelo=async(apiDatos, datos)=>{
    const response = await api.post(apiDatos, datos);
    return(response.data.paralelo_id);
  }
  const postCursoParalelo=async(apiDatos, datos)=>{
    const response = await api.post(apiDatos, datos);
    return(response.data.message)
  }
  const postMateria=async(apiDatos, datos)=>{
    const response = await api.post(apiDatos, datos);
    return(response.data.message)
  }


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

  const useParalelo = (apiParalelo) => {

    const [paralelo, setParalelo] = useState([]);
  
    useEffect(() => {
        const getParalelo = async () => {
            const response = await api.get(apiParalelo);
            setParalelo(response.data);
        };
        getParalelo();
    }, [apiParalelo]);
    return paralelo;
  };

  const useCurso = (apiCurso) => {

    const [curso, setCurso] = useState([]);
  
    useEffect(() => {
        const getCurso = async () => {
            const response = await api.get(apiCurso);
            setCurso(response.data);
        };
        getCurso();
    }, [apiCurso]);
    return curso;
  };

const useCursoParalelo = (apiCursoParalelo) => {

  const [cursoParalelo, setCursoParalelo] = useState([]);

  useEffect(() => {
      const getCursoParalelo = async () => {
          const response = await api.get(apiCursoParalelo);
          setCursoParalelo(response.data);
      };
      getCursoParalelo();
  }, [apiCursoParalelo]);
  return cursoParalelo;
};


const apiObject = {
  postCurso,
  postParalelo,
  postCursoParalelo,
  useNivel,
  useCursoParalelo,
  useParalelo,
  useCurso
}

export default apiObject;