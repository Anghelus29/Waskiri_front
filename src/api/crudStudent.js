import { useEffect, useState } from 'react'
import api from './axios';


const peticionPost=async(apiPersona, datos, datos2 ,datos3, datos4,datos5)=>{
    const response = await api.post(apiPersona, {"estudiante":datos, "direccion":datos2, "padre":datos3, "madre":datos4, "tutor":datos5});
   //console.log(response);
  }

const useCursoParalelo = (apiCursoParalelo) => {
    const [cursoparalelo, setCursoParalelo] = useState([]);
  
    useEffect(() => {
        const getCursoParalelo = async () => {
            const response = await api.get(apiCursoParalelo);
            setCursoParalelo(response.data);
        };
        getCursoParalelo();
    }, [apiCursoParalelo]);
    return cursoparalelo;
  };

  const apiObject = {
    peticionPost,
    useCursoParalelo
}


export default apiObject;