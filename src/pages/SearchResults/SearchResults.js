import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getSearchPhotos } from '../../store/searchResultsPageReducer/actions';
import { useLocation } from 'react-router-dom';
import InfiniteLoader from 'react-infinite-loader';
import saveImage from 'utils/saveImage';
import { Wrapper, PhotoList } from 'components';
import {
  Header,
  HeaderDescription,
  HeaderImageContainer,
  HeaderImage,
  HashTag,
  HeaderPara,
  Posts,
  LinkNavigation,
  LinkContainer,
  InfiniteLoaderContainer,
  StyledInfinteLoader,
} from './SearchResults.styles.js';

function SearchResults({ data, getSearchPhotos, searchTerm }) {
  const [headerData, setHeaderData] = useState(null);
  const [hashTag, setHashTag] = useState('');
  const location = useLocation();

  useEffect(() => {
    setHeaderData(data[8]);
    setHashTag(location.pathname.split('/')[2]);
  }, [data]);

  return (
    <Wrapper>
      {headerData && (
        <Header>
          <HeaderImageContainer bgColor={headerData.color}>
            <HeaderImage
              src={headerData.urls.regular}
              alt={headerData.alt_description}
            />
          </HeaderImageContainer>
          <HeaderDescription>
            <HashTag>#{hashTag}</HashTag>
            <HeaderPara>{headerData.description}</HeaderPara>
            <Posts> Posts</Posts>
          </HeaderDescription>
        </Header>
      )}
      <LinkNavigation>
        Top Posts
        <LinkContainer>
          {/* WIP */}
          {/* <button onClick={() => getPhotos('photos')}>Photos</button>
          <button onClick={() => getPhotos('collections')}>Collections</button> */}
        </LinkContainer>
      </LinkNavigation>

      <PhotoList photos={data} handleSave={saveImage} />

      <InfiniteLoaderContainer>
        <StyledInfinteLoader onVisited={() => getSearchPhotos(searchTerm)} />
      </InfiniteLoaderContainer>
    </Wrapper>
  );
}

const mapDispatchToProps = { getSearchPhotos };

const mapStateToProps = (state) => ({
  data: state.searchPhotos.searchPhotos,
  searchTerm: state.searchPhotos.searchTerm,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
