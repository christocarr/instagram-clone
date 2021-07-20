import { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoList from '../../components/PhotoList';
import { Wrapper } from './Home.Styles';

function Home() {
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
      );
      setPhotos(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <Wrapper>
      <PhotoList photos={photos} />
    </Wrapper>
  );
}

export default Home;
