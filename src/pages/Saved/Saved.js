import { connect } from 'react-redux';
import { Wrapper, PhotoList } from 'components';

function Saved({ photos }) {
  if (!photos.length)
    return (
      <Wrapper>
        <h2>There Are No Saved Photos to Show</h2>
        <p>Toggle the star icon on any modal to save or remove a photo.</p>
      </Wrapper>
    );
  return <Wrapper>{photos && <PhotoList photos={photos} />}</Wrapper>;
}

function getSavedPhotos(state) {
  return Object.values(state.togglePhoto.savedPhotos);
}

const mapStateToProps = (state) => ({
  photos: getSavedPhotos(state),
});

export default connect(mapStateToProps)(Saved);
