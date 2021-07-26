import { useState, useEffect } from 'react';
import axios from 'axios';
import { PhotoList } from 'components';
function SearchResults({ location }) {
  const [photos, setPhotos] = useState([]);
  const splitPath = location.pathname.split('/');
  const searchTerm = splitPath[2];
  const getPhotos = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&query=${searchTerm}`
      );
      setPhotos(response.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div>
      <PhotoList photos={photos} />
    </div>
  );
}

export default SearchResults;
