import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import InfiniteLoader from 'react-infinite-loader';
import saveImage from 'utils/saveImage';
import { Wrapper, PhotoList } from 'components';
import { Header, HeaderDescription, HeaderImageContainer, HeaderImage, HashTag, HeaderPara, Posts, LinkNavigation, LinkContainer } from './SearchResults.Styles'

function SearchResults({ data, getPhotos }) {
  const [headerData, setHeaderData] = useState(null)
  const [hashTag, setHashTag] = useState('')
  const location = useLocation()

  useEffect(() => {
    setHeaderData(data[8])
    setHashTag(location.pathname.split('/')[2])


  }, [data])

  const handleSearchType = (type) => {
    // setSearchType(type)
  }

  console.log(getPhotos)

  //These styles are needed to trigger InfiniteLoader because of list layout
  const containerStyle = { paddingTop: '2rem', paddingBottom: '2rem', position: 'relative', zIndex: '-100' }
  const visitStyle = { position: 'absolute', width: '100%', bottom: '10rem', height: '10rem' }

  return (
    <Wrapper>
      <div style={containerStyle}>
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
            <button onClick={() => handleSearchType('photos')}>Photos</button>
            <button onClick={() => handleSearchType('collections')}>Collections</button>
          </LinkContainer>
        </LinkNavigation>

        <PhotoList photos={data} handleSave={saveImage} />
        <InfiniteLoader onVisited={getPhotos} visitStyle={visitStyle} />
      </div>
    </Wrapper >
  );
}

export default SearchResults;
