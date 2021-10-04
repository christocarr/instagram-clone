import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { connect } from 'react-redux';
import {
  getCollectionPhotos,
  getCollectionId,
} from '../../store/collectionPageReducer/action';
import { Wrapper, PhotoList } from 'components';
import {
  Heading,
  InfiniteLoaderContainer,
  StyledInfinteLoader,
} from './Collection.Styles';

function Collection({
  photos,
  getCollectionPhotos,
  getCollectionId,
  collectionId,
}) {
  const [searchTerm, setSearchTerm] = useState('');

  const location = useLocation();

  useEffect(() => {
    const [, , path, collectionId] = location.pathname.split('/');
    getCollectionId(collectionId);

    setSearchTerm(path);

    getCollectionPhotos();
  }, [location]);

  return (
    <Wrapper>
      <Heading>{`${searchTerm} Collection no. ${collectionId}`}</Heading>
      <PhotoList photos={photos} />
      <InfiniteLoaderContainer>
        <StyledInfinteLoader onVisited={() => getCollectionPhotos()} />
      </InfiniteLoaderContainer>
    </Wrapper>
  );
}

const mapStateToProps = ({ collectionPhotos }) => ({
  photos: collectionPhotos.collectionPhotos,
  collectionId: collectionPhotos.collectionId,
});

const mapDispatchToProps = { getCollectionPhotos, getCollectionId };

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
