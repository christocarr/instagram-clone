import { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteLoader from 'react-infinite-loader';
import { PhotoList } from 'components';

function User({ match }) {
  const [userPhotos, setUserPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const getUserPhotos = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/users/${match.params.username}/photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&page=${page}`
      );
      setUserPhotos([...userPhotos, ...response.data]);
      setPage(page + 1);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUserPhotos();
  }, []);

  return (
    <>
      <PhotoList photos={userPhotos} />
      <InfiniteLoader onVisited={() => getUserPhotos()} />
    </>
  );
}

export default User;
