import { connect } from 'react-redux';
import { Wrapper, PhotoList } from 'components';

function Saved({ photos }) {
  return (
    <Wrapper>
      <PhotoList photos={photos} />
    </Wrapper>
  );
}

function getSavedPhotos(state) {
  return Object.values(state.togglePhoto.savedPhotos);
}

const mapStateToProps = (state) => ({
  photos: getSavedPhotos(state),
});

export default connect(mapStateToProps)(Saved);
