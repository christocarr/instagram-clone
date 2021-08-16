import InfiniteLoader from 'react-infinite-loader';
import SaveImage from 'utils/SaveImage';
import { Wrapper, PhotoList } from 'components';

function Home({ data, getPhotos }) {
  return (
    <Wrapper>
      <PhotoList photos={data} handleSave={SaveImage} />
      <InfiniteLoader onVisited={() => getPhotos()} />
    </Wrapper>
  );
}

export default Home;
