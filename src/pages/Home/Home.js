import InfiniteLoader from 'react-infinite-loader';
import useLocalStorage from 'utils/useLocalStorage';
import { Wrapper, PhotoList } from 'components';

function Home({ data, getPhotos }) {
  const [photos, setPhotos] = useLocalStorage('savedImages', []);

  return (
    <Wrapper>
      <PhotoList photos={data} setPhotos={setPhotos} />
      <InfiniteLoader onVisited={() => getPhotos()} />
    </Wrapper>
  );
}

export default Home;
