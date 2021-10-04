import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  justify-content: center;
  top: 0;
  display: flex;
  width: 100%;
  height: 5em;
  background-color: white;
  border-bottom: 1px solid grey;
  z-index: 1001;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 768px;
  margin: 0 auto;
`;
