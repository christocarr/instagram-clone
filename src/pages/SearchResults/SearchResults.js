import { useState, useEffect } from 'react';
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
  StyledInfinteLoader
} from './SearchResults.Styles'

function SearchResults({ data, getPhotos }) {
  const [headerData, setHeaderData] = useState(null)
  const [hashTag, setHashTag] = useState('')
  const location = useLocation()

  useEffect(() => {
    setHeaderData(data[8])
    setHashTag(location.pathname.split('/')[2])


  }, [data])

  // console.log('in search results', data)

  return (
    <Wrapper>

      {headerData && (
        <Header>
          <HeaderImageContainer bgColor={headerData.color}>
            <HeaderImage src={headerData.urls.regular} alt={headerData.alt_description} />
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
          <button onClick={() => getPhotos('photos')}>Photos</button>
          <button onClick={() => getPhotos('collections')}>Collections</button>
        </LinkContainer>
      </LinkNavigation>

      <PhotoList photos={data} handleSave={saveImage} />

      <InfiniteLoaderContainer>
        <StyledInfinteLoader onVisited={getPhotos} />
      </InfiniteLoaderContainer>
    </Wrapper >
  );
}

export default SearchResults;
