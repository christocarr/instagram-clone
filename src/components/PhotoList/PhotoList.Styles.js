import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(2, 1fr));
  grid-auto-rows: 200px;
  max-width: 100%;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  width: 40%;
`;
