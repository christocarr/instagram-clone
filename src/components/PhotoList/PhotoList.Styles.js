import styled, { css } from 'styled-components';

export const List = styled.ul`
  ${(props) =>
    props.page === 'gridLayout'
      ? css`
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(5, 1fr);
          grid-column-gap: 1em;
          grid-row-gap: 1em;
        `
      : props.page === 'masonry'
      ? css`
          column-count: 3;
          gap: 1em;
        `
      : css``}

  margin-left: -5px;
  margin-right: -5px;
`;

export const ListItem = styled.li`
  ${(props) =>
    props.page === 'masonry'
      ? css`
          display: inline-block;
          margin: 0 0 1em;
          width: 100%;
        `
      : css``}
`;
