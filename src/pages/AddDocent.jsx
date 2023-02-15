import React, {useState} from 'react'
import '../styles/addDocent.css';
import apiObject from '../api/crudDocent'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import es from 'date-fns/locale/es'
import Swal from 'sweetalert2'

registerLocale("es",es);

const userPost= "/registro/trabajador";

const RegistrarDocente = () => {

    const [docente, setDocente]=useState({
        ci:'',
        name:'',
        celular:'',
        ciudad:'',
        zona:'',
        calle:'',
        nro:'',
        correo:'',
        password:'',
        password_confirm:''
      })

      const handleChange=e=>{
        setDocente({
            ...docente,
            [e.target.name]:e.target.value
        })
      //console.log(docente);
    }

    const ventana=() =>Swal.fire({
        title: 'Advertencia',
        text:'Esta seguro de registrar al docente  '+ docente.name + '?',
        icon:'question',
        showDenyButton: true
      }).then(response=>{
        if(response.isConfirmed){
            if(docente.name==''||docente.ci==''||docente.celular==''||docente.ciudad==''||docente.zona==''||docente.calle==''||docente.correo==''||docente.password==''||docente.password_confirm==''){
                Swal.fire("Informacion","Por favor inserte todos los datos del docente", 'warning')
              }else if(docente.password==docente.password_confirm){
                peticionPost();
              }else{
                Swal.fire("Informacion","La contraseña no esta confirmada", 'warning')
              }
        }else if(response.isDenied){
          Swal.fire("Informacion","Registro Cancelado", 'error')
        }
      })

    const [fecha, setFecha]=useState({
        fecha:new Date("1990","01","01")
      })

    const onchangeFecha=fecha=>{
        setFecha({fecha: fecha})
    }

    var datosEnviarDocente={name:docente.name,carnet:docente.ci,nacimiento:fecha.fecha,numero:docente.celular};
    var datosEnviarDireccion={ciudad:docente.ciudad,zona:docente.zona,calle:docente.calle,nro:docente.nro}
    var datosEnviarUser={email:docente.correo,password:docente.password,password_confirm:docente.password_confirm,role_id:'3'}

    const peticionPost=()=>{
        const addDocente= apiObject.peticionPostUser(userPost, datosEnviarDocente,datosEnviarDireccion,datosEnviarUser).then(res=>{
            console.log(res);
            Swal.fire("Exito","Registro Exitoso", 'success')
        })
        }


    const  handleSubmit = event =>{
        event.preventDefault()
        event.target.reset();
        }

    return (
        <div className="container">
            <h3 className='label-title'>DATOS DEL DOCENTE</h3>
            <form id="register-form" onSubmit={handleSubmit}>
                <ul className="input-container">
                    <h4>Cedula de Identidad:</h4>
                    <li><input name="ci" onChange={handleChange}   type="number" placeholder="Cedula de Identidad"/></li>
                    <h4>Nombre Completo:</h4>
                    <li><input name="name" onChange={handleChange}   type="text" placeholder="Nombre Completo" /></li>
                    <h4>Fecha de Nacimiento:</h4>
                    <li><DatePicker name="nacimiento" selected={fecha.fecha} onChange={onchangeFecha} locale="es" dateFormat="yyyy-MM-dd" ></DatePicker></li>
                    <h4>Celular:</h4>
                    <li><input name="celular" onChange={handleChange}   type="number" placeholder="Celular" /></li>
                    <h4>Ciudad:</h4>
                    <li><input name="ciudad" onChange={handleChange}  type="text" placeholder="Ciudad"  /></li>
                    <h4>Zona:</h4>
                    <li><input name="zona" onChange={handleChange} type="text" placeholder="Zona" /></li>
                    <h4>Calle:</h4>
                    <li><input name="calle" onChange={handleChange} type="text" placeholder="Calle"  /></li>
                    <h4>Nro:</h4>
                    <li><input name="nro" onChange={handleChange} type="number" placeholder="Nro"  /></li>                    
                    <h4>CORREO ELECTRONICO:</h4>
                    <li><input name="correo" onChange={handleChange}   type="email" placeholder="Correo Electronico" /></li>
                    <h4>CONTRASEÑA:</h4>
                    <li><input name="password" onChange={handleChange}  type="password" placeholder="Password" /></li>
                    <h4>CONFIRMAR CONTRASEÑA:</h4>
                    <li><input name="password_confirm" onChange={handleChange}  type="password" placeholder="Confirm Password"  /></li>

                    <button type="submit" className="primary-button register-button" onClick={ventana}> Registrar </button>
                </ul>
            </form>
        </div>
    );
}

export default RegistrarDocente;