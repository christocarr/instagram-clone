import styled from 'styled-components';

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: lightgrey;
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
