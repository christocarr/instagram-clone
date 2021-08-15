import { useState, useEffect } from 'react';
import useLocalStorage from 'utils/useLocalStorage';
import { Wrapper, PhotoList } from 'components';

function Saved(props) {
  const [photos, setPhotos] = useLocalStorage('savedImages', []);
  const [data, setData] = useState([]);

  const handleSave = (content) => {
    const imageExists = photos.find((ph) => ph.id === content.id);
    if (imageExists) {
      const photosArr = photos.filter((ph) => ph.id !== content.id);
      setPhotos(photosArr);
    }
    if (!imageExists) {
      const photosArr = [...photos, content];
      setPhotos(photosArr);
    }
  };
  return (
    <Wrapper>
      <PhotoList
        photos={photos}
        setPhotos={setPhotos}
        handleSave={handleSave}
      />
    </Wrapper>
  );
}

export default Saved;
