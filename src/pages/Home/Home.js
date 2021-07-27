import { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteLoader from 'react-infinite-loader';
import { PhotoList } from 'components';
import { Wrapper } from './Home.Styles';

function Home() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const getPhotos = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&page=${page}`
      );
      setPhotos([...photos, ...response.data]);
      setPage(page + 1);
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
      <InfiniteLoader onVisited={() => getPhotos()} />
    </Wrapper>
  );
}

export default Home;
