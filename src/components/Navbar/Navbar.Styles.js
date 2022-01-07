import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 5em;
  z-index: 1001;
  ${(props) =>
    props.theme.theme === 'light'
      ? css`
          background-color: hsl(100, 0%, 98%);
          border-bottom: 1px solid hsl(100, 0%, 93%);
        `
      : css`
          background-color: hsl(100, 0%, 25%);
          border-bottom: 1px solid hsl(100, 0%, 18%);
        `}
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  max-width: 768px;
  margin: auto;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  margin-left: -5px;
  padding: 0.5em 0 0.5em 0;
  border-radius: 0.5em;
  @media (min-width: 767px) {
    height: 30px;
    padding-left: 2em;
  }

  ${(props) =>
    props.theme.theme === 'light'
      ? css`
          background-color: hsl(100, 0%, 100%);
        `
      : css`
          background-color: hsl(100, 0%, 60%);
        `}
`;

export const SearchIconContainer = styled.div`
  @media (min-width: 767px) {
    margin-right: 1em;
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-right: -5px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: flex-end;
`;

export const StyledNavLink = styled(NavLink)`
  border-radius: 0.5em;
  ${(props) =>
    props.theme.theme === 'light'
      ? css`
          background-color: hsl(100, 0%, 100%);
        `
      : css`
          background-color: hsl(100, 0%, 60%);
        `}
  &:hover,
  &:focus {
    background-color: ${(props) => props.bgcolor};
  }
  &.${(props) => props.activeClassName} {
    background-color: ${(props) => props.bgcolor};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
