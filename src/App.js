import { Switch, Route, useLocation } from 'react-router-dom';
import { Home, Saved, Explore, User, SearchResults } from 'pages';
import { Navbar, Modal } from 'components';
import GlobalStyle from 'globalStyles';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch location={background || location}>
        <Route exact path="/" component={Home} />
        <Route path="/saved" component={Saved} />
        <Route path="/explore" component={Explore} />
        <Route path="/users/:username" component={User} />
        <Route path="/search/:searchTerm" component={SearchResults} />
      </Switch>
      {background && <Route path="/modal/:id" component={Modal} />}
    </>
  );
}

export default App;
