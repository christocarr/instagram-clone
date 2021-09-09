import styled, { css } from 'styled-components';

export const List = styled.ul`
  ${(props) =>
    props.page === 'search'
      ? css`
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(5, 1fr);
          grid-column-gap: 30px;
          grid-row-gap: 30px;
        `
      : css``}

  margin-left: -5px;
  margin-right: -5px;
`;

export const ListItem = styled.li``;
