import { Switch, Route, useLocation } from 'react-router-dom';
import { Home, Saved, Explore, User, SearchResults, Collection } from 'pages';
import { Navbar, Modal, ScrollToTop } from 'components';
import GlobalStyle from 'globalStyles';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <ScrollToTop />
      <Switch location={background || location}>
        <Route exact path="/" component={Home} />
        <Route path="/saved" component={Saved} />
        <Route path="/explore" component={Explore} />
        <Route path="/users/:username" component={User} />
        <Route
          path="/search/:searchType/:searchTerm"
          component={SearchResults}
        />
        <Route
          path="/collection/:searchTerm/:collectionId"
          component={Collection}
        />
      </Switch>
      {background && <Route path="/modal/:id" component={Modal} />}
    </>
  );
}

export default App;
