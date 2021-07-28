import InfiniteLoader from 'react-infinite-loader';
import { PhotoList } from 'components';
import { Wrapper } from './Home.Styles';

function Home({ data, getPhotos }) {
  return (
    <Wrapper>
      <PhotoList photos={data} />
      <InfiniteLoader onVisited={() => getPhotos()} />
    </Wrapper>
  );
}

export default Home;
