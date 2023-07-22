import { useAuth0 } from '@auth0/auth0-react';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import Celebrities_List from '../componentes/Celebrities_List';

const Home = () => {
  const { user, isLoading } = useAuth0();
  const [celebrity, setCelebrity] = useState([]);

  const key = process.env.REACT_APP_KEY;
  const headers = {
    'X-Api-Key': key
  };

  const url = process.env.REACT_APP_URL;
  useEffect(() => {
    if (!isLoading && user && user.name) { // Check if user data and name are available
      Axios.get(url, { headers })
        .then(res => {
          console.log(res.data);
          setCelebrity(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [isLoading, user]);

  if (isLoading) {
    // Render loading state while waiting for user data
    return <div>Loading...</div>;
  }

  if (!user || !user.name) {
    // Handle the case where user data is not available or user name is missing
    return <div>Error: User data not available.</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <Celebrities_List celebrities={celebrity} />
    </div>
  );
};

export default Home;