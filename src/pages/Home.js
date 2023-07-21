import { useAuth0 } from '@auth0/auth0-react'
import React, { Fragment, Profiler } from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react';
import * as S from './Home.styles';
import Celebrities_List from '../componentes/Celebrities_List';

const Home = () => {
  const { user } = useAuth0();
  const [celebrity, setCelebrity] = useState([]);

  const key = process.env.REACT_APP_KEY;
  const headers = {
    'X-Api-Key': key
  }

  const url = process.env.REACT_APP_URL;
  useEffect(() => {
    Axios.get(url, { headers })
      .then(res => {
        console.log(res.data)
        setCelebrity(res.data)
        
      })
      .catch(error => { console.log(error) })
  }, [])

  return (
    <div>
      <h2>{user.name}</h2>
      <Celebrities_List celebrities={celebrity}/>
    </div>
  )
}


export default Home;