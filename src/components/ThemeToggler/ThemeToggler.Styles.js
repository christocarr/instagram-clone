import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ImageContainer = styled(NavLink)`
  border-radius: 0.5em;
  background-color: white;
  overflow: hidden;
  &:hover,
  &:focus {
    background-color: #bbb;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
