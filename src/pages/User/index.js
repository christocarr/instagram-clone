import { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoList from '../../components/PhotoList';

function User({ match }) {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/users/${match.params.username}/photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
      );
      setUser(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return <PhotoList photos={user} />;
}

export default User;
