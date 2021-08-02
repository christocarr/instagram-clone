import InfiniteLoader from 'react-infinite-loader';
import { PhotoList } from 'components';

function Home({ data, getPhotos }) {
  return (
    <>
      <PhotoList photos={data} />
      <InfiniteLoader onVisited={() => getPhotos()} />
    </>
  );
}

export default Home;
