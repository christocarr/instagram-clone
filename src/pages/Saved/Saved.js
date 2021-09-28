import { connect } from 'react-redux';
import { Wrapper, PhotoList } from 'components';

function Saved({ photos }) {
  return (
    <Wrapper>
      <PhotoList photos={photos} />
    </Wrapper>
  );
}

const mapStateToProps = (state) => ({ photos: state.togglePhoto.savedPhotos });

export default connect(mapStateToProps)(Saved);
