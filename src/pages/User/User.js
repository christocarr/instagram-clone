import InfiniteLoader from 'react-infinite-loader';
import { PhotoList } from 'components';

function User({ data, getPhotos }) {
  return (
    <>
      <PhotoList photos={data} />
      <InfiniteLoader onVisited={() => getPhotos()} />
    </>
  );
}

export default User;
