import { Search, ThemeToggler } from 'components';
import {
  Nav,
  NavWrapper,
  Ul,
  ListItem,
  SearchBar,
  StyledNavLink,
  Image,
  SearchIconContainer,
} from './Navbar.Styles';
import SearchIcon from '../../assets/icons/Search.svg';
import CameraIcon from '../../assets/icons/Camera.svg';
import HeartIcon from '../../assets/icons/Heart_bulk.svg';

function Navbar() {
  return (
    <Nav>
      <NavWrapper>
        <SearchBar>
          <SearchIconContainer>
            <Image src={SearchIcon} alt="search photos" />
          </SearchIconContainer>
          <Search />
        </SearchBar>
        <Ul>
          <ListItem>
            <StyledNavLink
              to="/explore"
              activeClassName="active"
              bgcolor="#6495ED"
            >
              <Image src={CameraIcon} alt="explore photos" />
            </StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink
              to="/saved"
              activeClassName="active"
              bgcolor="#FFB6C1"
            >
              <Image src={HeartIcon} alt="saved photos" />
            </StyledNavLink>
          </ListItem>
          <ListItem>
            <ThemeToggler />
          </ListItem>
        </Ul>
      </NavWrapper>
    </Nav>
  );
}

export default Navbar;
