import { Link } from 'react-router-dom';
import { Search } from 'components';
import { Nav, Ul } from './Navbar.Styles';
function Navbar() {
  return (
    <Nav>
      <Ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/saved">Saved</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Search />
        </li>
      </Ul>
    </Nav>
  );
}

export default Navbar;
