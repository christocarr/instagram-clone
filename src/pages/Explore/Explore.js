import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getExplorePhotos } from '../../store/explorePageReducer/actions';
import { Wrapper, PhotoList } from 'components';
import { InfiniteLoaderContainer, StyledInfinteLoader } from './Explore.Styles';

function Explore({ photos, getExplorePhotos }) {
  useEffect(() => {
    getExplorePhotos();
  }, []);

  return (
    <Wrapper>
      <PhotoList photos={photos} />
      <InfiniteLoaderContainer>
        <StyledInfinteLoader onVisited={() => getExplorePhotos()} />
      </InfiniteLoaderContainer>
    </Wrapper>
  );
}

const mapDispatchToProps = { getExplorePhotos };

const mapStateToProps = (state) => ({
  photos: state.explorePhotos.explorePhotos,
});

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
