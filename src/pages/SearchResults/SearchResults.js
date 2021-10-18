import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getSearchPhotos,
  getSearchCollections,
} from '../../store/searchResultsPageReducer/actions';
import { Switch, Route, useLocation, useHistory, Link } from 'react-router-dom';
import { Wrapper, PhotoList, CollectionList, InfiniteLoader } from 'components';
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
  Button,
} from './SearchResults.styles.js';

function SearchResults({
  photosData,
  collectionsData,
  getSearchPhotos,
  getSearchCollections,
  totalPosts,
  searchTerm,
}) {
  const [headerData, setHeaderData] = useState(null);
  const [hashTag, setHashTag] = useState('');
  const [showCollections, setShowCollections] = useState(false);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const [, , path, searchQuery] = location.pathname.split('/');
    setHashTag(searchQuery);
    setHeaderData(photosData[8]);

    if (path === 'collections') {
      setShowCollections(true);
    }

    if (path === 'photos') {
      setShowCollections(false);
    }
  }, [photosData, location]);

  const handlePhotosSearch = () => {
    history.push(`/search/photos/${searchTerm}`);
    getSearchPhotos(searchTerm);
  };

  const handleCollectionsSearch = () => {
    history.push(`/search/collections/${searchTerm}`);
    getSearchCollections(searchTerm);
  };

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
            <Posts>{`${totalPosts} posts`}</Posts>
          </HeaderDescription>
        </Header>
      )}
      <LinkNavigation>
        Top Posts
        <LinkContainer>
          <Button
            component={Link}
            onClick={handlePhotosSearch}
            active={showCollections === true ? 'false' : 'true'}
          >
            Photos
          </Button>
          <Button
            component={Link}
            onClick={handleCollectionsSearch}
            active={showCollections === true ? 'true' : 'false'}
          >
            Collections
          </Button>
        </LinkContainer>
      </LinkNavigation>

      <Switch>
        <Route path="/search/collections/:searchTerm">
          <CollectionList
            collections={collectionsData}
            searchTerm={searchTerm}
          />
        </Route>
        <Route path="/search/photos/:searchTerm">
          <PhotoList photos={photosData} />
          <InfiniteLoader getPhotos={() => getSearchPhotos(searchTerm)} />
        </Route>
      </Switch>
    </Wrapper>
  );
}

const mapDispatchToProps = { getSearchPhotos, getSearchCollections };

const mapStateToProps = (state) => ({
  photosData: state.searchPhotos.searchPhotos,
  collectionsData: state.searchPhotos.searchCollections,
  searchTerm: state.searchPhotos.searchTerm,
  totalPosts: state.searchPhotos.total_posts,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
