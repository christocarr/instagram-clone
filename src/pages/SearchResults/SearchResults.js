import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import InfiniteLoader from 'react-infinite-loader';
import saveImage from 'utils/saveImage';
import { Wrapper, PhotoList } from 'components';
import { Header, HeaderDescription, HeaderImageContainer, HeaderImage, HashTag, HeaderPara, Posts, LinkNavigation, LinkContainer } from './SearchResults.Styles'

function SearchResults({ data, totalPosts, getPhotos }) {
  const [headerData, setHeaderData] = useState(null)
  const [hashTag, setHashTag] = useState('')
  const location = useLocation()

  useEffect(() => {
    setHeaderData(data[8])
    setHashTag(location.pathname.split('/')[2])


  }, [data, totalPosts])

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
          <Link>Photos</Link>
          <Link>Collections</Link>
        </LinkContainer>
      </LinkNavigation>

      <PhotoList photos={data} handleSave={saveImage} />
      <InfiniteLoader onVisited={() => getPhotos()} />
    </Wrapper>
  );
}

export default SearchResults;
