import InfiniteLoader from 'react-infinite-loader';
import { Wrapper, PhotoList } from 'components';

function Home({ data, getPhotos }) {
  return (
    <Wrapper>
      <PhotoList photos={data} />
      <InfiniteLoader onVisited={() => getPhotos()} />
    </Wrapper>
  );
}

export default Home;
