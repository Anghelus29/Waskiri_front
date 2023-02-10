import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
//import apiObject from '../api/axios';
import api from '../api/axios';

const adminList = [1, 2, 3, 4];

const apiLogin = '/login';
const apiLogout = '/usuario/logout';

const AuthContext = React.createContext();

function AuthProvider({ children }) {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const login = ({ email, password }) => {

        const postLogin = async () => {
            try{
                const response = await api.post(apiLogin, { email, password })
                localStorage.setItem("Token", response.data.accessToken);
                const isAdmin = adminList.find(admin => admin === response.data.usuario.role_id);
                setUser({ email, password, isAdmin });
                navigate('/perfil');
            }catch(error){
                console.log(error.message);
            }
        }
        postLogin();
    }

    const logout = () => {
        const postLogout = async () => {
            const response = await api.post(apiLogout)
            console.log(response.data.mensaje);
            localStorage.clear();
            setUser(null);
            navigate('/');
        }
        postLogout();
    }

    const auth = { user, login, logout };

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const auth = React.useContext(AuthContext);
    return auth;
}

function AuthRoute(props) {
    const auth = useAuth();

    if (!auth.user) {
        return <Navigate to='/login' />;
    }

    return props.children;
}


export {
    AuthProvider,
    AuthRoute,
    useAuth
};
