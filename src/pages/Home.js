import { useAuth0 } from '@auth0/auth0-react'
import React, { Fragment } from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react';
import * as S from './Home.styles';

const Home = () => {
  const { user } = useAuth0();
  const [emoji, setEmoji] = useState([]);

  const key = process.env.REACT_APP_KEY;
  const headers = {
    'X-Api-Key': key
  }

  const nombre = 'slightly smiling face';
  const url = process.env.REACT_APP_URL + nombre;
  useEffect(() => {
    Axios.get(url, { headers })
      .then(res => {
        console.log(res.data)
        setEmoji(res.data)
        console.log(emoji)
      })
      .catch(error => { console.log(error) })
  }, [])

  return (
    <div>
      <h2>{user.name}</h2>
      <div>
        {emoji.map(cel => {
          return (
            <S.ContentCharacter>
              <Fragment>
                <h4>{cel.name}</h4>
                <img src={cel.image} alt="emoji"/>
              </Fragment>
            </S.ContentCharacter>
          )
        })}
      </div>
    </div>
  )
}


export default Home;