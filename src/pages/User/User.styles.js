import styled from 'styled-components';
import InfiniteLoader from 'react-infinite-loader';

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: grey;
`;

export const UserImage = styled.img`
  width: 20%;
  margin-bottom: 1em;
  border-radius: 0.3em;
`;

export const UserName = styled.p`
  margin-bottom: 1em;
  font-size: 1rem;
  font-weight: bolder;
  color: black;
`;

export const UserLink = styled.a`
  font-size: 0.9rem;
  margin-bottom: 1em;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 1em;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

export const Posts = styled.p`
  font-size: 1rem;
  font-weight: bolder;
  color: black;
`;

export const Followers = styled.p`
  font-size: 1rem;
  font-weight: bolder;
  color: black;
`;

export const Following = styled.p`
  font-size: 1rem;
  font-weight: bolder;
  color: black;
`;

export const UserCollections = styled.ul``;

//These styles are needed to trigger InfiniteLoader because of the list layout
export const InfiniteLoaderContainer = styled.div`
  position: relative;
  z-index: -100;
  padding: 2em 0 2em 0;
`;

export const StyledInfinteLoader = styled(InfiniteLoader)`
  position: absolute;
  width: 100%;
  height: 10em;
  bottom: 10em;
`;
