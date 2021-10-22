import styled, { css } from 'styled-components';

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  align-items: center;
  border-radius: 0.5em;
  background-color: white;
  padding: 1em;
  margin-bottom: 30px;
  ${(props) =>
    props.theme.theme === 'light'
      ? css`
          background-color: hsl(100, 0%, 100%);
          box-shadow: 0px 0px 12px 1px rgba(222, 222, 222, 0.2);
          -webkit-box-shadow: 0px 0px 12px 1px rgba(222, 222, 222, 0.2);
          -moz-box-shadow: 0px 0px 12px 1px rgba(222, 222, 222, 0.2);
        `
      : css`
          background-color: hsl(100, 0%, 60%);
          color: hsl(100, 0%, 100%);
        `}
`;

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
  ${(props) =>
    props.theme.theme === 'light'
      ? css`
          color: hsl(100, 0%, 0%);
        `
      : css`
          color: hsl(100, 0%, 100%);
        `}
`;

export const Description = styled.p`
  margin-bottom: 16px;
  margin-right: auto;
  font-weight: bolder;
  &::first-letter {
    text-transform: capitalize;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 30em;
  margin-bottom: 1em;
  border-radius: 0.5em;
  background-color: ${(props) => props.bgColor};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0.5em;
  object-fit: cover;
`;

export const Footer = styled.div``;

export const SaveImage = styled.div`
  cursor: pointer;
`;
