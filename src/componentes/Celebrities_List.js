import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Celebrities_List = ({ celebrities }) => {
    
    const dispatch = useDispatch();
    const {celebrities_List} = useSelector (state => state.cel)

    //Pendiente boton para agregar al redux, generar handle para disparar el dispatch

    return (
        <Fragment>
            <div>Celebrities_List</div>
            <div> {celebrities.map(c => {
                return (
                    <div>
                        <h4>{c.name}</h4>
                        <h3>{c.age}</h3>
                        <div>{c.occupation}</div>
                    </div>)
            }
            )}
            </div>
        </Fragment>)
}

export default Celebrities_List

