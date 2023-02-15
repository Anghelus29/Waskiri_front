import { HashRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider, AuthRoute } from '../auth/auth';
import React, { Component, useState} from 'react'
//header
import Layout from '../containers/Layout';

//auth
import Home from '../pages/Home';
import Nosotros from '../pages/Nosotros';
import Login from '../pages/Login';
import Perfil from '../pages/Perfil';
import Logout from '../pages/Logout';
import NotFound from '../pages/NotFound';

import '../styles/global.css';

//pages
import ListDocents from '../pages/ListDocents';
import AddHours from '../pages/AddHours';
import AddDocent from '../pages/AddDocent';
import AddStudent from '../pages/AddStudent';
import ListStudents from '../pages/ListStudents';
import Asistencia from '../pages/Asistencia';
import Message from '../pages/Message';
import Horarios from '../pages/Horarios';
import AddClassroom from '../pages/addClassroom';
import AddDocentSubject from '../pages/addDocentSubject';


function App() {

  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Layout>
            <Routes>

              <Route path='/' element={<Home />} />

              <Route path='/nosotros' element={<Nosotros />} />

              <Route path='/login' element={<Login />} />
              <Route path='/perfil' element={<AuthRoute><Perfil /></AuthRoute>} />
              <Route path='/logout' element={<AuthRoute><Logout /></AuthRoute>} />

              <Route path='/registrarDocente' element={<AuthRoute><AddDocent /></AuthRoute>} />
              <Route path='/registrarEstudiante' element={<AuthRoute><AddStudent /></AuthRoute>} />
              <Route path='/registrarCurso' element={<AuthRoute><AddClassroom /></AuthRoute>} />
              <Route path='/registrarDocenteMateria' element={<AuthRoute><AddDocentSubject/></AuthRoute>} />
              <Route path='/listaDocentes' element={<AuthRoute><ListDocents /></AuthRoute>} />
              <Route path='/horariosDocentes' element={<AuthRoute><AddHours /></AuthRoute>} />
              <Route path='/listaEstudiantes' element={<AuthRoute><ListStudents /></AuthRoute>} />
              <Route path='/horarios' element={<AuthRoute><Horarios /></AuthRoute>} />

              <Route path='/comunicados' element={<AuthRoute><Message /></AuthRoute>} />
              <Route path='/asistencia' element={<AuthRoute><Asistencia /></AuthRoute>} />

              <Route path='*' element={<NotFound />} />

            </Routes>
          </Layout>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
