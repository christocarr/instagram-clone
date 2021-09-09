import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background-color: ${(props) => props.bgColor};
  border-radius: 0.5em;
`;

export const Image = styled.img`
  width: inherit;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
