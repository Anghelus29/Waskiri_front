import '../styles/modal.css';
import '../styles/tables.css';
import apiObject from '../api/crudClassroom';
import React, {useState} from 'react'
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import {faEdit, faTrashAlt, faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
import Swal from 'sweetalert2'


const paralelocursoPost= "/cursoparalelo/guardar";
const paralelocursoList= "/cursoparalelo/list";
const nivelList= "/niveles/list";
const paraleloList= "/paralelos/list";
const cursosList= "/cursos/list";

function RegistrarCurso (){

    const dataNivel = apiObject.useNivel(nivelList);
    const nivel = dataNivel.data;

    const dataCursos = apiObject.useNivel(cursosList);
    const cursos = dataCursos.data;

    const dataParalelo = apiObject.useNivel(paraleloList);
    const paralelo = dataParalelo.data;

    const dataCursosParalelos = apiObject.useCursoParalelo(paralelocursoList);
    const cursosParalelos=dataCursosParalelos.data;
    //console.log(cursosParalelos);


    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");

    const [modalInsertar, setModalInsertar]=useState(false);


    const abrirModalInsertar=()=>{
        setModalInsertar(true);
    }

     //Ventanas de alerta
  const ventana=() =>Swal.fire({
    title: 'Advertencia',
    text:'Esta seguro de registrar el curso?',
    icon:'question',
    showDenyButton: true
  }).then(response=>{
    if(response.isConfirmed){
        if(value1==''||value2==''||value3==''){
            Swal.fire("Atencion","Por favor seleccione Todos los datos", 'warning')
        }else{
            peticionPostCursoParalelo();
        }
      }else if(response.isDenied){
      Swal.fire("Informacion","Registro Cancelado", 'error')
    }
  })

    const peticionPostCursoParalelo=async()=>{
            apiObject.postCursoParalelo(paralelocursoPost, {curso_id:value1, paralelo_id:value2, nivele_id:value3}).then(res=>{
            Swal.fire("Exito",res, 'success')
            setModalInsertar(false);
        })
    }



    //controla el recargue de la pagina
    const  handleSubmit = event =>{
        event.preventDefault()
      }

    return (
        <>
            <div id="main-container">
                <div >
                    <br />
                    <button className="btn-success" onClick={()=>abrirModalInsertar()}>Agregar Curso</button>     
                    <br />
                    <table>
                        <thead>
                        <tr>
                            <th>Curso</th>
                            <th>Paralelo</th>
                            <th>Nivel</th>
                        </tr>
                        </thead>
                        <tbody>
                    {cursosParalelos?.map(datos=>{
                    return(
                        <tr key={datos.id} value={datos.id}>
                        <td>{datos.curso}</td>
                        <td>{datos.paralelo}</td>
                        <td>{datos.nivel}</td>
                    </tr>
                    )
                    })}
                    </tbody>
                    </table>
                </div>
                {/*MODAL PARA LA VENTANA DE REGISTRAR CURSO COMPLETO */}
                <Modal isOpen={modalInsertar}className='modal'>
                    <ModalHeader className='modalheader'>
                        <div>
                            <h3>REGISTRAR CURSO</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody className='modalbody'>
                        <form id="register-form" onSubmit={handleSubmit}>
                            <ul className="container-input">
                                <h4>Cursos</h4>
                                <li><select  value={ value1 } onChange={ (event) => setValue1( event.target.value)  }>
                                <option value={-1}>Seleccione una opcion:</option>
                                {cursos?.map(elemento=>(
                                <option key={elemento.id} value={elemento.id}  >{elemento.name}</option>
                                )
                                )};
                                </select>
                                </li>
                                <h4>Paralelo</h4>
                                <li><select  value={ value2 } onChange={ (event) => setValue2( event.target.value)  }>
                                <option value={-1}>Seleccione una opcion:</option>
                                {paralelo?.map(elemento=>(
                                <option key={elemento.id} value={elemento.id}  >{elemento.name}</option>
                                )
                                )};
                                </select>
                                </li>
                                <h4>Nivel</h4>
                                <li><select value={ value3 } onChange={ (event) => setValue3( event.target.value)  }>
                                <option value={-1}>Seleccione una opcion:</option>
                                {nivel?.map(elemento=>(
                                <option key={elemento.id} value={elemento.id}  >{elemento.name}</option>
                                )
                                )};
                                </select></li>
                            </ul>
                        </form>
                    </ModalBody>
                    <ModalFooter className='modalfooter'>
                        <button type='submit' className="btn-add" onClick={ventana}> Registrar </button>
                        <button type='submit' className="btn-delete" onClick={()=>setModalInsertar(false)}> Cancelar </button>
                    </ModalFooter>
                </Modal>
            </div>
        </>
        );
    }
export default RegistrarCurso;

  


 