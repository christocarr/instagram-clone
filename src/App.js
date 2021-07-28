import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import withFetch from 'withFetch';
import { Home, User, SearchResults } from 'pages';
import { Search } from 'components';

const HomeWithFetch = withFetch(Home);

const UserWithFetch = withFetch(User);

const SearchResultsWithFetch = withFetch(
  SearchResults
  // `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&query=${searchTerm}&page=${page}`
);

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Search />
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={HomeWithFetch} />
          <Route path="/users/:username" component={UserWithFetch} />
          <Route path="/search" component={SearchResultsWithFetch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
