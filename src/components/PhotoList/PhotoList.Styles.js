import styled, { css } from 'styled-components';

export const List = styled.ul`
  /* display: flex; */
  /* flex-direction: column; */
  /* flex-wrap: wrap; */
  /* justify-content: space-between; */

  ${(props) =>
    props.page === 'search'
      ? css`
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(5, 1fr);
          grid-column-gap: 6px;
          grid-row-gap: 6px;
        `
      : css``}

  margin-left: -5px;
  margin-right: -5px;
`;

export const ListItem = styled.li`
  /* flex: 1 1 auto; */
  margin-bottom: 5px;
  /*${(props) =>
    props.page === 'home'
      ? css`
          width: 100%;
        `
      : props.page === 'search'
      ? css`
          width: 33%;
        `
      : css`
          width: 50%;
        `} */
  /* @media (max-width: 768px) {
    width: 100%;
  } */
`;
