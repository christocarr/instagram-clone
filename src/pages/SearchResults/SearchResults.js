import InfiniteLoader from 'react-infinite-loader';
import useLocalStorage from 'utils/useLocalStorage';
import { Wrapper, PhotoList } from 'components';

function SearchResults({ data, getPhotos }) {
  const [photos, setPhotos] = useLocalStorage('savedImages', []);

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
      <PhotoList photos={data} handleSave={handleSave} />
      <InfiniteLoader onVisited={() => getPhotos()} />
    </Wrapper>
  );
}

export default SearchResults;
