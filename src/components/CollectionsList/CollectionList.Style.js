import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 1em;
  grid-row-gap: 1em;

  margin-left: -5px;
  margin-right: -5px;
`;

export const ListItem = styled.li`
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: 0.5em;
  background-color: darkgray;
  overflow: hidden;
  cursor: pointer;
`;

export const PostText = styled.p`
  position: absolute;
  display: none;
  width: 100%;
  top: 37%;
  font-size: 2rem;
  color: white;
  z-index: 1000;
  text-align: center;
  ${ListItem}:hover & {
    display: block;
  }
`;

export const CollectionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: bottom;
  object-position: center;
  opacity: 1;
  ${ListItem}:hover & {
    opacity: 0.3;
  }
`;
