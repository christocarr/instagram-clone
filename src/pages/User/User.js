import { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteLoader from 'react-infinite-loader';
import { Wrapper, PhotoList } from 'components';
import {
  UserProfile,
  UserImage,
  UserLink,
  Container,
  Box,
  Posts,
  Followers,
  Following,
  UserCollections,
} from './User.styles';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

function User({ data, getPhotos }) {
  const [userData, setUserData] = useState(null);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);

  useEffect(() => {
    setUserData(data[0]);

    if (userData) {
      getFollowers(userData.user.links.followers);
      getFollowing(data[0].user.links.following);
    }
  }, [data, userData]);

  const getFollowers = async (baseUrl) => {
    const key = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
    const url = `${baseUrl}/?client_id=${key}`;
    const response = await axios.get(url);
    setFollowers(response.data);
  };

  const getFollowing = async (baseUrl) => {
    const key = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
    const url = `${baseUrl}/?client_id=${key}`;
    const response = await axios.get(url);
    setFollowing(response.data);
  };

  console.log(data);

  return (
    <Wrapper>
      {userData && (
        <>
          <UserProfile>
            <UserImage
              src={userData.user.profile_image.medium}
              alt="unsplash user"
            />
            <UserLink>{userData.user.portfolio_url}</UserLink>
            <Container>
              <Box>
                <Posts>{userData.user.total_photos}</Posts>
                <p>Posts</p>
              </Box>
              <Box>
                <Followers>{followers.length}</Followers>
                <p>Followers</p>
              </Box>
              <Box>
                <Following>{following.length}</Following>
                <p>Following</p>
              </Box>
            </Container>
          </UserProfile>
          {userData.current_user_collections && (
            <UserCollections>
              {userData.current_user_collections.map((item) => (
                <li>{item}</li>
              ))}
            </UserCollections>
          )}
          <PhotoList photos={data} />
          <InfiniteLoader onVisited={() => getPhotos()} />
        </>
      )}
    </Wrapper>
  );
}

export default User;
