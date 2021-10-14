import {
  InfiniteLoaderContainer,
  StyledInfiniteLoader,
} from './InfiniteLoader.Styles';

function Loader({ getPhotos }) {
  return (
    <InfiniteLoaderContainer>
      <StyledInfiniteLoader onVisited={getPhotos} />
    </InfiniteLoaderContainer>
  );
}

export default Loader;
