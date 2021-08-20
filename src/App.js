import { Switch, Route, useLocation } from 'react-router-dom';
import withFetch from 'withFetch';
import { Home, Saved, Explore, User, SearchResults } from 'pages';
import { Navbar, Modal } from 'components';
import GlobalStyle from 'globalStyles';

const HomeWithFetch = withFetch(Home);

const ExploreWithFetch = withFetch(Explore);

const UserWithFetch = withFetch(User);

const SearchResultsWithFetch = withFetch(SearchResults);

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch location={background || location}>
        <Route exact path="/" component={HomeWithFetch} />
        <Route path="/saved" component={Saved} />
        <Route path="/explore" component={ExploreWithFetch} />
        <Route path="/users/:username" component={UserWithFetch} />
        <Route path="/search" component={SearchResultsWithFetch} />
      </Switch>
      {background && <Route path="/modal/:id" component={Modal} />}
    </>
  );
}

export default App;
