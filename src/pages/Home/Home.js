import { useEffect } from 'react';
import { getHomePhotos } from '../../store/homePageReducer/actions';
import { connect } from 'react-redux';
import { Wrapper, PhotoList, InfiniteLoader } from 'components';

function Home({ photos, getHomePhotos }) {
  useEffect(() => {
    getHomePhotos();
  }, []);

  return (
    <Wrapper>
      <PhotoList photos={photos} />
      <InfiniteLoader getPhotos={() => getHomePhotos()} />
    </Wrapper>
  );
}

const mapStateToProps = (state) => ({
  photos: state.homePhotos.photos,
});

const mapDispatchToProps = {
  getHomePhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
