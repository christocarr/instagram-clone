import styled from 'styled-components'

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px lightgrey solid;
  border-radius: 0.5em;
  background-color: white;
  padding: 1em;
`

export const TopNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1em;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserImage = styled.img`
  flex: 1;
  width: 35px;
  height: 35px;
  margin-right: 1em;
  border-radius: 0.2em;
`;

export const Name = styled.p`
  font-weight: bolder;
`;

export const LastUpdated = styled.p`
  color: hsl(0, 0%, 40%);
`;

export const Description = styled.p`
    margin-bottom: 16px;
    margin-right: auto;
    font-weight: bolder;
`

export const Image = styled.img`
  width: 100%;
  margin-bottom: 1em;
  border-radius: 0.5em;
`;

export const Footer = styled.div``;

export const SaveImage = styled.div`
  cursor: pointer;
`;