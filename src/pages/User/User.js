import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../../store/userPageReducer/actions';
import axios from 'axios';
import InfiniteLoader from 'react-infinite-loader';
import { Wrapper, PhotoList } from 'components';
import {
  UserProfile,
  UserImage,
  UserName,
  UserLink,
  Container,
  Box,
  Posts,
  Followers,
  Following,
  UserCollections,
} from './User.styles';

function User({ userData, match, getUserData }) {
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);

  useEffect(() => {
    if (userData) {
      getFollowers(userData.links.followers);
      getFollowing(userData.links.following);
    }
  }, [userData]);

  useEffect(() => {
    getUserData(match.params.username);
  }, []);

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

  return (
    <Wrapper>
      {userData && (
        <>
          <UserProfile>
            <UserImage src={userData.profile_image.large} alt="unsplash user" />
            <UserName>{userData.name}</UserName>
            <UserLink href={userData.portfolio_url}>
              {userData.portfolio_url}
            </UserLink>
            <Container>
              <Box>
                <Posts>{userData.total_photos}</Posts>
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
          <PhotoList photos={userData.photos} />
          {/* WIP */}
          {/* <InfiniteLoader onVisited={() => getPhotos()} /> */}
        </>
      )}
    </Wrapper>
  );
}

const mapStateToProps = (state) => ({
  userData: state.userData.userData[0],
});

const mapDispatchToProps = { getUserData };

export default connect(mapStateToProps, mapDispatchToProps)(User);
