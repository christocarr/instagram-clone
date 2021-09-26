import useLocalStorage from 'utils/useLocalStorage';
import { Wrapper, PhotoList } from 'components';

function Saved() {
  const [photos, setPhotos] = useLocalStorage('savedImages', []);

  return (
    <Wrapper>
      <PhotoList photos={photos} />
    </Wrapper>
  );
}

export default Saved;
