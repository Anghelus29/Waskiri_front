
import '../styles/addStudent.css';
import apiObject from '../api/crudStudent';
import React, {useState} from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import es from 'date-fns/locale/es'
import Swal from 'sweetalert2'

registerLocale("es",es);

const listcursoParelelo="/cursoparalelo/list"
const personasPost= "/registro/estudiante";


const RegistrarEstudiante =()=>{


  const dataCursoParalelo = apiObject.useCursoParalelo(listcursoParelelo);
  const cursoparalelos = dataCursoParalelo.data;

  
  const [value, setValue] = useState("");

  const [estudiante, setEstudiante]=useState({
    name: '',
    carnet:'',
    celular:'',
    cursos:''
  })
  const [padre, setPadre]=useState({
    name2: '',
    carnet2:'',
    celular2:''
  })
  const [madre, setMadre]=useState({
    name3: '',
    carnet3:'',
    celular3:''
  })
  const [direccion, setDireccion]=useState({
    ciudad:'',
    zona:'',
    calle:'',
    nro:''
  })


//Datos para las fechas
  const [fecha1, setFecha1]=useState({
    fecha1:new Date("2000","01","01")
  })
  const [fecha2, setFecha2]=useState({
    fecha2:new Date("2000","01","01")
  })
  const [fecha3, setFecha3]=useState({
    fecha3:new Date("2000","01","01")
  })

  //Obtener los datos escritos

    const handleChange=e=>{
        setEstudiante({
            ...estudiante,
            [e.target.name]:e.target.value
        })
      //console.log(estudiante);
    }

    const handleChange1=e=>{
        setPadre({
            ...padre,
            [e.target.name]:e.target.value
        })
    //console.log(padre);
    }
    
    const handleChange2=e=>{
        setMadre({
            ...madre,
            [e.target.name]:e.target.value
        })
    //console.log(madre);
    }
    const handleChange3=e=>{
      setDireccion({
          ...direccion,
          [e.target.name]:e.target.value
      })
  //console.log(direccion);
  }

  //Ventanas de alerta
  const ventana=() =>Swal.fire({
    title: 'Advertencia',
    text:'Esta seguro de registrar al estudiante  '+ estudiante.name + '?',
    icon:'question',
    showDenyButton: true
  }).then(response=>{
    if(response.isConfirmed){
      if(estudiante.name==''||estudiante.carnet==''||direccion.ciudad==''||direccion.zona==''||direccion.calle==''||value=='Seleccione un curso:'||value===''){
        Swal.fire("Informacion","Por favor inserte todos los datos del estudiante", 'warning')
      }else if(padre.name2!==''&&padre.carnet2!==''&&padre.celular2!==''&&madre.name3!==''&&madre.carnet3!==''&&madre.celular3!==''){
        var datosEnviarPadre={name:padre.name2, carnet:padre.carnet2, nacimiento:fecha2.fecha2, numero:padre.celular2};
        var datosEnviarMadre={name:madre.name3, carnet:madre.carnet3, nacimiento:fecha3.fecha3, numero:madre.celular3};
        peticionPost(datosEnviarPadre,datosEnviarMadre);
        Swal.fire("Exito","Registro Exitoso", 'success')
      }else if(padre.name2!==''&&padre.carnet2!==''&&padre.celular2!==''){
        var datosEnviarPadre={name:padre.name2, carnet:padre.carnet2, nacimiento:fecha2.fecha2, numero:padre.celular2};
        var datosEnviarMadre={};
        peticionPost(datosEnviarPadre,datosEnviarMadre);
        Swal.fire("Exito","Registro Exitoso", 'success')

      }else if(madre.name3!==''&&madre.carnet3!==''&&madre.celular3!==''){
        var datosEnviarPadre={};
        var datosEnviarMadre={name:madre.name3, carnet:madre.carnet3, nacimiento:fecha3.fecha3, numero:madre.celular3};
        peticionPost(datosEnviarPadre,datosEnviarMadre);
        Swal.fire("Exito","Registro Exitoso", 'success')
      }else{
        Swal.fire("Informacion","Por  favor inserte los datos del familiar", 'warning')
      }

    }else if(response.isDenied){
      Swal.fire("Informacion","Registro Cancelado", 'error')
    }
  })
    
    //Obtener la fecha seleccionada
    const onchangeFecha1=fecha1=>{
        setFecha1({fecha1: fecha1})
    }
    const onchangeFecha2=fecha2=>{
        setFecha2({fecha2: fecha2})
    }
    const onchangeFecha3=fecha3=>{
        setFecha3({fecha3: fecha3})
    }
    
    //Obtener los datos y acomodar a los cmapos de la tabla de la BD
     var datosEnviarEstudiante={name:estudiante.name, carnet:estudiante.carnet, nacimiento:fecha1.fecha1,cursoparalelo_id:value,numero:estudiante.celular};
     var datosEnviarDireccion={ciudad:direccion.ciudad, zona:direccion.zona, calle:direccion.calle, nro:direccion.nro};
     var datosEnviarTutor={};

      const peticionPost=(datosEnviarPadre, datosEnviarMadre)=>{
        const addEstudiante= apiObject.peticionPost(personasPost, datosEnviarEstudiante, datosEnviarDireccion, datosEnviarPadre, datosEnviarMadre, datosEnviarTutor).then(res=>{

        })     
        }

    //controla el recargue de la pagina
    const  handleSubmit = event =>{
        event.preventDefault()
        event.target.reset();
      }

        return (
            <>
            <div className="container-register" >
              <form id="register-form" onSubmit={handleSubmit}>
                  <div className='container-student'>
                          <ul className="container-input">
                              <h3 className='label-title'>DATOS DEL ESTUDIANTE</h3>
                              <h4>Nombre:</h4>
                              <li><input name="name" onChange={handleChange}  type="text" placeholder="Nombre" required /></li>
                              <h4>Cedula de Identidad:</h4>
                              <li><input name="carnet" onChange={handleChange} type="text" placeholder="Carnet" required /></li>
                              <h4>Fecha deNacimiento:</h4>
                              <li><DatePicker name="nacimiento" selected={fecha1.fecha1} onChange={onchangeFecha1} locale="es" dateFormat="yyyy-MM-dd" ></DatePicker></li>
                              <h4>Celular:</h4>
                              <li><input name="celular" onChange={handleChange} type="number" placeholder="Celular"/></li>
                              <h4>Ciudad:</h4>
                              <li><input name="ciudad" onChange={handleChange3}  type="text" placeholder="Ciudad" required  /></li>
                              <h4>Zona:</h4>
                              <li><input name="zona" onChange={handleChange3} type="text" placeholder="Zonna" required  /></li>
                              <h4>Calle:</h4>
                              <li><input name="calle" onChange={handleChange3} type="text" placeholder="Calle" required  /></li>
                              <h4>Nro:</h4>
                              <li><input name="nro" onChange={handleChange3} type="number" placeholder="Nro"  /></li>
                              <h4>Curso:</h4>
                              <li><select name='cursos' value={ value } onChange={ (event) => setValue( event.target.value)  }>
                              <option value={-1}>Seleccione un curso:</option>
                              {cursoparalelos?.map(elemento=>(
                              <option key={elemento.id} value={elemento.id}  >{elemento.curso} - {elemento.paralelo} - {elemento.nivel}</option>
                              )
                              )};
                              </select></li>
                              <button type='submit' className="primary-button register-button" onClick={ventana}> Registrar </button>
                          </ul>
                  </div>
              <div className='container-tutor'>
                  <ul className="container-input">
                          <h3 className='label-title'>DATOS DEL PADRE</h3>
                          <h4>Nombre</h4>
                          <li><input name="name2"  onChange={handleChange1} type="text" placeholder="Nombre"  /></li>
                          <h4>Cedula de Identidad:</h4>
                          <li><input  name="carnet2"  onChange={handleChange1} type="text" placeholder="Carnet"   /></li>
                          <h4>Fecha de Nacimiento:</h4>
                          <li><DatePicker name="nacimiento2" selected={fecha2.fecha2} onChange={onchangeFecha2} locale="es" dateFormat="yyyy-MM-dd" ></DatePicker></li>
                          <h4>Celular:</h4>
                          <li><input name="celular2" onChange={handleChange1} type="number" placeholder="Celular"/></li>


                          <h3 className='label-title'>DATOS DE LA MADRE</h3>
                          <h4>Nombre:</h4>
                          <li><input name="name3" onChange={handleChange2} type="text" placeholder="Nombre"  /></li>
                          <h4>Cedula de Identidad:</h4>
                          <li><input name="carnet3" onChange={handleChange2} type="text" placeholder="Carnet" /></li>
                          <h4>Fecha deNacimiento:</h4>
                          <li><DatePicker name="nacimiento3" selected={fecha3.fecha3} onChange={onchangeFecha3} locale="es" dateFormat="yyyy-MM-dd" ></DatePicker></li>
                          <h4>Celular:</h4>
                          <li><input name="celular3" onChange={handleChange2} type="number" placeholder="Celular"/></li>
                  </ul>
            </div>
            </form>
            </div>
            </>
            );
    }
 
export default RegistrarEstudiante;