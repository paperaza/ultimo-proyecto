import { useAuth0 } from '@auth0/auth0-react'
import React, { Fragment } from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react';

const Home = () => {
    const { user } = useAuth0();
    const [celebrity, setCelebrity] = useState([]);

    const key = process.env.REACT_APP_KEY;
    const headers = {
      'X-Api-Key': key
    }
    
    const nombre ='Michael Jordan'; 
    const url =process.env.REACT_APP_URL+nombre;
    useEffect(()=>{ 
      Axios.get(url, {headers})
      .then(res=>{console.log(res.data) 
       setCelebrity(res.data)
       console.log(celebrity)})
      .catch(error=>{console.log(error)})
    },[])

    return(
      <div>
        <h2>{user.name}</h2>
        <div>
        {celebrity.map(cel=>{return(
          <Fragment>
          <h4>{cel.name}</h4>
          <h3>{cel.age}</h3>
          </Fragment>
        )})}
        </div>  
      </div>
    )
}

export default Home;