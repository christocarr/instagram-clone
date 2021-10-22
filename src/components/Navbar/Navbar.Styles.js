import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 5em;
  background-color: hsl(100, 0%, 98%);
  z-index: 1001;
  border-bottom: 1px solid hsl(100, 0%, 93%);
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
  width: 70%;
  margin-left: -5px;
  padding: 0.5em 0 0.5em 2em;
  background-color: white;
  border-radius: 0.5em;
  @media (min-width: 767px) {
    height: 30px;
  }
`;

export const SearchIconContainer = styled.div`
  width: 25px;

  @media (min-width: 767px) {
    width: 30px;
    margin-right: 1em;
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  width: 30%;
  margin-right: -5px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: flex-end;
  width: 33.33%;
`;

export const StyledNavLink = styled(NavLink)`
  border-radius: 0.5em;
  background-color: white;
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
