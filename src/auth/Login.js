import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import * as S from "./Log.styles";
import { useDispatch } from 'react-redux';
import login from '../actions/userActions';
import Imagen from "../img/oscars.jpg";
import "../index.css"


export const Login = () => {

    const { loginWithRedirect, isAuthenticated, user, isLoading } = useAuth0();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            await loginWithRedirect();
        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {
        if (isAuthenticated && user) {
            dispatch(login(user))
        };
    }, [isAuthenticated, user, dispatch]);

    if (isLoading) {
        return <div>Cargando...</div>
    }

    return <S.ContainerButton>
        <h1 id="bienv">BIENVENIDOS</h1>
        <div><img id="imagen" src={Imagen} /></div>
        <S.Button onClick={handleLogin}>Igresar</S.Button>
    </S.ContainerButton>;


};

export default Login;


