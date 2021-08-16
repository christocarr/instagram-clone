import useLocalStorage from 'utils/useLocalStorage';
import SaveImage from 'utils/SaveImage';
import { Wrapper, PhotoList } from 'components';

function Saved() {
  const [photos, setPhotos] = useLocalStorage('savedImages', []);

  return (
    <Wrapper>
      <PhotoList photos={photos} setPhotos={setPhotos} handleSave={SaveImage} />
    </Wrapper>
  );
}

export default Saved;
