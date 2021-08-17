import InfiniteLoader from 'react-infinite-loader';
import saveImage from 'utils/saveImage';
import { Wrapper, PhotoList } from 'components';

function Home({ data, getPhotos }) {
  return (
    <Wrapper>
      <PhotoList photos={data} handleSave={saveImage} />
      <InfiniteLoader onVisited={() => getPhotos()} />
    </Wrapper>
  );
}

export default Home;
