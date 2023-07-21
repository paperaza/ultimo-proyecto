import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Favorites = () => {

    const dispatch = useDispatch();
    const { celebrities_List } = useSelector(state => state.cel)

    return (
        <>
            <div>Listado de Favoritos</div>
            <table>
                <thead>
                    <tr>

                        <th scope='col'>ID</th>
                        <th scope='col'>NOMBRE</th>
                        <th scope='col'>NACIONALIDA</th>
                        <th scope='col'>EDAD</th>

                    </tr>
                </thead>

                <tbody>
                    {celebrities_List.map(c => {
                        return (
                            <tr>

                                <td scope='row'>{c.birthday}</td>
                                <td scope='row'>{c.name}</td>
                                <td scope='row'>{c.nationality}</td>
                                <td scope='row'>{c.age}</td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Favorites
