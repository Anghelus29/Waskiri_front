import { useEffect, useState } from 'react'
import api from './axios';


const peticionPostUser=async(apiUser, datos, datos2 ,datos3)=>{
    const response = await api.post(apiUser, {"trabajador":datos,"direccion":datos2,"usuario":datos3});
   //console.log(response);
  }

  const apiObject = {
    peticionPostUser
}


export default apiObject;