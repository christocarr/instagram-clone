import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getExplorePhotos } from '../../store/explorePageReducer/actions';
import InfiniteLoader from 'react-infinite-loader';
import { Wrapper, PhotoList } from 'components';

function Explore({ photos, getExplorePhotos }) {
  useEffect(() => {
    getExplorePhotos();
  }, []);

  return (
    <Wrapper>
      <PhotoList photos={photos} />
      <InfiniteLoader onVisited={() => getExplorePhotos()} />
    </Wrapper>
  );
}

const mapDispatchToProps = { getExplorePhotos };

const mapStateToProps = (state) => ({
  photos: state.explorePhotos.explorePhotos,
});

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
