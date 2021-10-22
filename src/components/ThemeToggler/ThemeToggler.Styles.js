import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const ImageContainer = styled(NavLink)`
  border-radius: 0.5em;
  background-color: white;
  overflow: hidden;

  ${(props) =>
    props.theme.theme === 'light'
      ? css`
          background-color: hsl(100, 0%, 20%);
        `
      : css`
          background-color: hsl(100, 0%, 90%);
        `}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
