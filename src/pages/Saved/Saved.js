import { useState, useEffect } from 'react';
import useLocalStorage from 'utils/useLocalStorage';
import { Wrapper, PhotoList } from 'components';

function Saved(props) {
  const [photos, setPhotos] = useLocalStorage('savedImages', []);
  const [data, setData] = useState([]);

  return (
    <Wrapper>
      <PhotoList photos={photos} />
    </Wrapper>
  );
}

export default Saved;
