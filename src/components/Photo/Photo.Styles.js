import styled, { css } from 'styled-components';

export const ImageContainer = styled.div`
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background-color: ${(props) => props.bgColor};
  border-radius: 0.5em;
  ${(props) =>
    props.page === 'masonry'
      ? css`
          aspect-ratio: unset;
        `
      : css``}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: bottom;
  object-position: center;
`;
