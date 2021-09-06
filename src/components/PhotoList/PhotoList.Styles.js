import styled, { css } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: -5px;
  margin-right: -5px;
`;

export const ListItem = styled.li`
  flex: 1 1 auto;
  margin: 5px;
  ${(props) =>
    props.isHome &&
    css`
      width: 100%;
    `}
`;
