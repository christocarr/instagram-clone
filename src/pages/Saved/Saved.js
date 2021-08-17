import useLocalStorage from 'utils/useLocalStorage';
import saveImage from 'utils/saveImage';
import { Wrapper, PhotoList } from 'components';

function Saved() {
  const [photos, setPhotos] = useLocalStorage('savedImages', []);

  return (
    <Wrapper>
      <PhotoList photos={photos} setPhotos={setPhotos} handleSave={saveImage} />
    </Wrapper>
  );
}

export default Saved;
