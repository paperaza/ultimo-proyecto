import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import * as S from './Log.styles';

export const Logout = () => {
    const { logout } = useAuth0();

    return (
        <S.ContainerButton>
            <S.Button onClick={() => logout({ returnTo: window.location.origin })}>Cerrar Sesion</S.Button>
        </S.ContainerButton>
    );
}

export default Logout;
