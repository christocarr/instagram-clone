import { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteLoader from 'react-infinite-loader';

import { PhotoList } from 'components';
function SearchResults({ location }) {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const splitPath = location.pathname.split('/');
  const searchTerm = splitPath[2];
  const getPhotos = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&page=${page}&query=${searchTerm}`
      );
      setPhotos([...photos, ...response.data.results]);
      setPage(page + 1);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      <PhotoList photos={photos} />
      <InfiniteLoader onVisited={() => getPhotos()} />
    </>
  );
}

export default SearchResults;
