import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCel, setCel } from '../reducers/slices/celSlices';
import * as S from '../pages/Home.styles'
import * as stile from '../auth/Log.styles'
import "../index.css"

const Celebrities_List = ({ celebrities }) => {

    const dispatch = useDispatch();
    const { celebrities_List } = useSelector(state => state.cel)

    function handleAdd(celid) {
        const celebrity = celebrities.find(c => c.birthday === celid);
        if (celebrities_List.find(c => c.birthday === celid)) {
            dispatch(removeCel(celid));
        }
        else {
            dispatch(setCel(celebrity));
        }

        console.log(celebrity);
    }

    //Pendiente boton para agregar al redux, generar handle para disparar el dispatch

    return (
        <Fragment>
            <div>Celebrities_List</div>
            <div id="conten"> {celebrities.map(c => {
                return (
                    <div>
                        <S.ContentCharacter>
                            <h4>{c.name}</h4>
                            <h3>{c.age}</h3>
                            <div>{c.occupation}</div>
                            <stile.ContainerButtonAf>
                            <stile.ButtonAf on onClick={() => handleAdd(c.birthday)}>Agregar a favoritos</stile.ButtonAf>
                            </stile.ContainerButtonAf>
                        </S.ContentCharacter>
                    </div>)
            }
            )}
            </div>
        </Fragment>)
}

export default Celebrities_List

