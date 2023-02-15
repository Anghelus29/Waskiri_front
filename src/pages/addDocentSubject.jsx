import React, {useState} from 'react'
import '../styles/modal.css';
import '../styles/tables.css';
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
import Swal from 'sweetalert2'
import apiObject from '../api/crudDocentSubject';

const docenteList= "/pivotes/docentes/list";
const docenteHabilitado= "/usuario/docentes";
const materiaList="/materias/list";
const nivelList= "/niveles/list";
const matDocent="/pivotes/materia/docente"


function RegistrarDocenteMateria(){

    const dataDocentes = apiObject.useDocentesHabilitados(docenteList);
    const docentes=dataDocentes.data;
    //console.log(docentes);

    const dataDocentesHabilitados = apiObject.useDocentesHabilitados(docenteHabilitado);
    const docentesHabilitados=dataDocentesHabilitados.data;
    //console.log(docentesHabilitados);

    const materias = apiObject.useDocenteMateria(materiaList);
    const listMaterias=materias.data;
    //console.log(listMaterias);

    const dataNivel = apiObject.useNivel(nivelList);
    const nivel = dataNivel.data;
    //console.log(nivel);

    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");

    const [modalInsertar, setModalInsertar]=useState(false);

    const abrirModalInsertar=()=>{
        setModalInsertar(true);
    }
    
    const ventana=() =>Swal.fire({
        title: 'Advertencia',
        text:'Esta seguro de asignar la materia?',
        icon:'question',
        showDenyButton: true
      }).then(response=>{
        if(response.isConfirmed){
            if(value1==='-1'||value2==='-1'||value3==='-1'){
                Swal.fire("Atencion","Por favor seleccione Todos los datos", 'warning')
            }else{
                peticionPostMatDocent();
                Swal.fire("Exito","Se asigno correctamente la materia", 'success')
            }
          }else if(response.isDenied){
          Swal.fire("Informacion","Registro Cancelado", 'error')
        }
      })

    const peticionPostMatDocent=()=>{
        apiObject.postMatDocent(matDocent,value1,value2,value3)
        setModalInsertar(false);
    }

   const  handleSubmit = event =>{
        event.preventDefault()
      }


    return(
        <div id="main-container">
            <div >
                    <br />
                    <button className="btn-success" onClick={()=>abrirModalInsertar()}>Asignar Materia al Docente</button>     
                    <br />
                    <table className='table table--bordered'>
                        <thead>
                        <tr className='table table--bordered'>
                            <th>Docente</th>
                            <th>Materia</th>
                        </tr>
                        </thead>
                        <tbody>
                    {docentes?.map(datos=>{
                    return(
                        <tr key={datos.id} value={datos.user_id}>
                        <td>{datos.nombre}</td>
                        <td>{datos.materia}</td>
                    </tr>
                    )
                    })}
                    </tbody>
                    </table>
                </div>

                <Modal isOpen={modalInsertar}className='modal'>
                    <ModalHeader className='modalheader'>
                        <div>
                            <h3>ASIGNAR MATERIA</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody className='modalbody'>
                        <form id="register-form" onSubmit={handleSubmit}>
                            <ul className="container-input">
                                <h4>Docente</h4>
                                <li><select  value={ value1 } onChange={ (event) => setValue1( event.target.value)  }>
                                <option value={-1}>Seleccione una opcion:</option>
                                {docentesHabilitados?.map(elemento=>(
                                <option key={elemento.id} value={elemento.id}  >{elemento.nombre}</option>
                                )
                                )};
                                </select>
                                </li>
                                <h4>Materia</h4>
                                <li><select  value={ value2 } onChange={ (event) => setValue2( event.target.value)  }>
                                <option value={-1}>Seleccione una opcion:</option>
                                {listMaterias?.map(elemento=>(
                                <option key={elemento.id} value={elemento.id}  >{elemento.name}</option>
                                )
                                )};
                                </select>
                                </li>
                                <h4>Nivel</h4>
                                <li><select  value={ value3 } onChange={ (event) => setValue3( event.target.value)  }>
                                <option value={-1}>Seleccione una opcion:</option>
                                {nivel?.map(elemento=>(
                                <option key={elemento.id} value={elemento.id}  >{elemento.name}</option>
                                )
                                )};
                                </select>
                                </li>
                                
                            </ul>
                        </form>
                    </ModalBody>
                    <ModalFooter className='modalfooter'>
                        <button type='submit' className="btn-add" onClick={ventana} > Registrar </button>
                        <button type='submit' className="btn-delete" onClick={()=>setModalInsertar(false)}> Cancelar </button>
                    </ModalFooter>
                </Modal>
        </div>
    )
}
export default RegistrarDocenteMateria;